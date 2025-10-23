import { rutNormalizer, rutValidator } from "@ctrpdev/cl-rut-validator";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export default function Form() {
  const [rut, setRut] = useState("");
  const [validationResult, setValidationResult] = useState<boolean | null>(null);

  const placeholders = [
    "Ingresa un R.U.T.",
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
        <p className={`mt-4 font-semibold ${validationResult ? "text-green-600/90" : "text-red-600/90"}`}>
          {validationResult ? "R.U.T. válido" : "R.U.T. inválido"}
        </p>
      )}
    </div>
  );
}
