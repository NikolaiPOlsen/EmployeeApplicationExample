export interface EmployeeData {
    id: number;
    name: string;
    email: string;
    department: string;
    role: string;
    status: 'Active' | 'Inactive' | 'On Leave';
}