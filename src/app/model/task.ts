export interface Task {
    id: number;
    endDate: Date;
    startDate: Date;
    isCompleted: boolean;
    label: string;
    title: string;
    description: string;
}
