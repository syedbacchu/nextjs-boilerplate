'use client'

import { useFieldValidation } from '@/hooks/useFieldValidation'
import { ValidatorFn } from '@/lib/validators'

interface Props {
    label: string
    value?: string | number
    options: { label: string; value: string | number }[]
    onChange: (v: any) => void
    validators?: ValidatorFn[]
    required?: boolean
}

export default function SelectInput({
                                        label,
                                        value,
                                        options,
                                        onChange,
                                        validators = [],
                                        required = false,
                                    }: Props) {
    const { error, validate } = useFieldValidation(value, validators)

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                value={value ?? ''}
                onChange={(e) => onChange(e.target.value)}
                onBlur={validate}
                required={required}
                className="border rounded px-3 py-2"
            >
                <option value="">Select</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    )
}
