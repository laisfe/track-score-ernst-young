export interface EmployeesData {
  email: string;
  uid: string;
  name: string;
  available_budget: number;
  employees: EmployeesList[];
}

export interface EmployeesList {
  nome: string;
  cargo: string;
  actual_lead: string;
  company_time: string;
  hot_skills: [];
}
