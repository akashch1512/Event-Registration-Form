interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void; // Change here
  errorMessage: string;
  hasError: boolean;
  clearError: () => void;
  name: string; // New property to identify the input
}

export function TextInput({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  errorMessage, 
  hasError, 
  clearError, 
  name // New property to identify the input 
}: TextInputProps) {

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    onChange(name, value); // Pass name and value
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-denim text-xs sm:text-sm">{label}</label>
        {hasError && <span className="text-red text-xs sm:text-sm">{errorMessage}</span>}
      </div>
      <input
        className={`
          px-4 py-3 rounded ${hasError ? 'border-red' : 'border-border-color'} border-[1px] text-base text-denim font-medium  
          placeholder:text-grey
          focus:outline-none focus:border-purple
        `}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={() => clearError()}
        name={name} // Add name to input for better accessibility
      />
    </div>
  );
}
