const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export interface CustomerLeadData {
    full_name: string
    phone: string
    customer_type: string
    address: string
    district: string
    installation_site_type: string
    electricity_source: string
    meter_type: string
    daytime_usage: string
    system_type: string
    main_purpose: string
    budget_range: string
    payment_preference: string
    roof_size: string
    roof_type: string
    installation_area: string
    lead_source: string
    decision_maker: string
    decision_time: string
    whatsapp?: string
    email?: string
    nid?: string
    google_map?: string
    monthly_bill?: number
    system_size_kw?: number
    has_shadow?: boolean
    customer_signature?: string
    declaration_date?: string
}

export interface CompanyDetailsData {
    company_name: string
    full_name: string
    phone: string
    address: string
    grid_connection: string
    working_shift: string
    peak_load_time: string
    roof_size: string
    roof_type: string
    transformer_capacity?: number
    contract_demand?: number
    monthly_bill?: number
    monthly_consumption?: number
    total_connected_load?: number
    total_motor_load?: number
    daytime_load_percentage?: number
    demand_factor?: number
    diversity_factor?: number
    maximum_demand?: number
    daily_consumption?: number
    solar_target_percent?: number
    required_capacity_kw?: number
    system_size_kw?: number
    backup_hours?: number
    critical_load?: number
    inverter_size?: number
    panel_size?: number
    panel_quantity?: number
    estimated_project_cost?: number
    expected_payback_period?: number
    machinery_load_details?: Array<{
        machine_name: string
        qty: number
        rated_power_kw: number
        running_hours_per_day: number
        total_kw: number
    }>
    motor_load_details?: Array<{
        motor_type: string
        qty: number
        hp: number
        kw: number
        starting_type: string
    }>
    google_map?: string
    has_shadow?: boolean
    customer_signature?: string
    declaration_date?: string
}

export async function submitCustomerLead(data: CustomerLeadData): Promise<{ success: boolean; message?: string; error?: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/collect-leads/customer-information`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()

        if (!response.ok) {
            return { success: false, error: result.message || 'Failed to submit customer lead' }
        }

        return { success: true, message: result.message || 'Customer lead submitted successfully' }
    } catch (error) {
        console.error('Error submitting customer lead:', error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}

export async function submitCompanyDetails(data: CompanyDetailsData): Promise<{ success: boolean; message?: string; error?: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/collect-leads/company-details`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()

        if (!response.ok) {
            return { success: false, error: result.message || 'Failed to submit company details' }
        }

        return { success: true, message: result.message || 'Company details submitted successfully' }
    } catch (error) {
        console.error('Error submitting company details:', error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}
