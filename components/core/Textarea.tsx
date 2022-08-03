import { forwardRef } from "react"

type Props = {
  label?: string
  value?: string
  type?: string
  disabled?: boolean
  onChange?: (e: any) => void
  defaultValue?: string
  placeholder?: string
  className?: string
  error?: {
    type?: string
    message?: string
  }
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <label className={`flex flex-col space-y-2 ${className}`}>
        <span className="text-lg font-semibold text-[#3B3B3B]">{label}</span>

        <textarea className="form-input py-5 min-h-[200px]" ref={ref} {...rest} />

        {error && (
          <span className="mb-4 text-red-400">
            {error.type === "required"
              ? "This field is required"
              : error.message}
          </span>
        )}
      </label>
    )
  }
)

Textarea.defaultProps = {
  type: "text",
  error: {},
}

export default Textarea
