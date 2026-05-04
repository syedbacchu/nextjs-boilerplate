export interface CustomerLeadData {
    full_name: string
    phone: string
    customer_type: string
    address: string
    district: string
    installation_site_type: string
    installation_site_type_other?: string
    electricity_source: string
    meter_type: string
    daytime_usage: string
    system_type: string
    main_purpose: string
    main_purpose_other?: string
    budget_range: string
    payment_preference: string
    roof_size: string
    roof_type: string
    roof_type_other?: string
    installation_area: string
    lead_source: string
    lead_source_other?: string
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

export interface LeadDetailData {
    id: number
    type: number
    type_label: string
    site_type: number
    full_name: string
    phone: string
    whatsapp?: string
    email?: string
    address: string
    google_map?: string
    roof_size: string
    roof_type: string
    has_shadow: boolean
    lead_source: string
    decision_maker: string
    decision_time: string
    customer_signature?: string
    declaration_date?: string
    status: string
    created_at: string
    updated_at: string
    nid?: string
    customer_type: string
    district: string
    installation_site_type?: string
    installation_site_type_other?: string
    electricity_source?: string
    monthly_bill?: string
    meter_type?: string
    daytime_usage?: string
    system_type?: string
    system_size_kw?: string
    main_purpose?: string
    main_purpose_other?: string
    budget_range?: string
    payment_preference?: string
    installation_area?: string
    roof_type_other?: string
    lead_source_other?: string
}

export interface SubmitLeadResponse {
    success: boolean
    message?: string
    leadId?: number
    error?: string
}

export interface LeadDetailResponse {
    success: boolean
    data?: LeadDetailData
    error?: string
}
