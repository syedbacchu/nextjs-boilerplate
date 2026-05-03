'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import CustomerLeadForm from './CustomerLeadForm'
import CompanyDetailsForm from './CompanyDetailsForm'

export default function LeadFormModals() {
    const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false)
    const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false)

    const handleCustomerSuccess = () => {
        setIsCustomerModalOpen(false)
    }

    const handleCompanySuccess = () => {
        setIsCompanyModalOpen(false)
    }

    return (
        <>
            <button
                onClick={() => setIsCustomerModalOpen(true)}
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#04453d]"
            >
                Customer Lead Form
            </button>
            <button
                onClick={() => setIsCompanyModalOpen(true)}
                className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#04453d]"
            >
                Company Details Form
            </button>

            <Modal
                isOpen={isCustomerModalOpen}
                onClose={() => setIsCustomerModalOpen(false)}
                title="Customer Lead Form"
                className="max-w-4xl"
            >
                <CustomerLeadForm onSuccess={handleCustomerSuccess} onCancel={() => setIsCustomerModalOpen(false)} />
            </Modal>

            <Modal
                isOpen={isCompanyModalOpen}
                onClose={() => setIsCompanyModalOpen(false)}
                title="Company Details Form"
                className="max-w-5xl"
            >
                <CompanyDetailsForm onSuccess={handleCompanySuccess} onCancel={() => setIsCompanyModalOpen(false)} />
            </Modal>
        </>
    )
}
