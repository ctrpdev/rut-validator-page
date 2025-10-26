import { rutNormalizer, rutValidator } from "@ctrpdev/cl-rut-validator";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export default function Form() {
  const [rut, setRut] = useState("");
  const [validationResult, setValidationResult] = useState<boolean | null>(null);

  const placeholders = [
    "Ejemplo: 123456789",
    "Ejemplo: 12345678-9",
    "Ejemplo: 12.345.678-9",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(e.target.value);
    setValidationResult(null);
  };

  const handleValidation = (inputValue: string) => {
    const normalizedRut = rutNormalizer(inputValue);
    const isValid = rutValidator(normalizedRut);
    setValidationResult(isValid);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidation(rut);
  };

  return (
    <div className="h-fit flex flex-col justify-center items-center px-4 space-y-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {validationResult !== null && (
        <div className={`mt-4 font-semibold flex flex-col items-center justify-center ${validationResult ? "text-green-700/90" : "text-red-700/90"}`}>
          {validationResult ? `${rut}` : `${rut}`}
        <p className={`${validationResult ? "text-green-700/90" : "text-red-700/90"}`}>
          {validationResult ? `Es un RUT válido` : `No es un RUT válido`}
        </p>
        </div>
      )}
    </div>
  );
}
