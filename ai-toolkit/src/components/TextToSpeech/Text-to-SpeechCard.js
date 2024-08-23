import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SOUND_MODELS from "./constants";
import { Form, Button } from "react-bootstrap";
import Loader from "./Loader";

const TextToSpeechCard = () => {
  // State to manage loading status and audio URL
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  // State for tracking form submission status
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Initialize the react-hook-form with the validation schema
  const { register, handleSubmit } = useForm();

  const handleGetAudio = async (formData) => {
    setIsLoading(true);

    try {
      // Make a POST request to the server's API endpoint to generate audio
      // Make a POST request to the specified 'modelUrl' using Hugging Face token for authorization
      const response = await fetch(formData.modelUrl, {
        headers: {
          Authorization: `Bearer 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 `,
          // Authorization: `Bearer  ${process.env.HUGGING_FACE_TOKEN}`, // Use the correct token
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: formData.text }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio data.");
      }

      // Get the audio data as an ArrayBuffer
      const data = await response.arrayBuffer();

      // Convert ArrayBuffer to Blob and create a URL for the audio
      const blob = new Blob([data], { type: "audio/flac" });
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // Function to handle form submission
  function onSubmit(data) {
    console.log(data);
    // FormSchema.parse(data)
    setFormSubmitting(true);

    // Prepare the sound request object
    const soundRequest = {
      modelUrl: data.soundModel,
      text: data.text,
    };

    // Call the provided handler function with the sound request
    handleGetAudio(soundRequest);

    setFormSubmitting(false);
  }

  return (
    <div className="d-flex flex-column flex-md-row h-100">
      <div className="w-100 w-md-1/3 p-4">
        <div className="ms-4 me-4 mt-4 mb-4 text-xl"></div>
        <div className="ms-4 me-4">
          {/* Form component that uses react-hook-form */}
          <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Form field for selecting the sound model */}
            <Form.Group>
              <Form.Label>Sound Model</Form.Label>
              <select
                className="form-select"
                aria-label="Default select example"
                {...register("soundModel")}
              >
                {SOUND_MODELS.map((model, index) => (
                  <option key={`${model.name}-${index}`} value={model.url}>
                    {model.name}
                  </option>
                ))}
              </select>

              <Form.Text className="text-muted">
                This model will generate your sound.
              </Form.Text>
            </Form.Group>
            {/* Form field for entering the text */}
            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Enter your text here..."
                name="text"
                // value={form.values.text}
                // onChange={form.handleChange}
                disabled={formSubmitting}
                {...register("text")}
              />
              <Form.Text className="text-muted">
                The text used to convert to sound.
              </Form.Text>
            </Form.Group>
            {/* Submit button */}
            <Button type="submit" disabled={formSubmitting}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="w-100 w-md-2/3 p-4  h-100 load-box">
        <div className="h-100 d-flex justify-content-center align-items-center">
          {isLoading ? (
            // Show loader when fetching audio data
            <Loader />
          ) : (
            // Display audio player when audio is available
            <>
              {audioUrl && (
                <audio controls>
                  <source id="audioSource" type="audio/flac" src={audioUrl} />
                </audio>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechCard;
