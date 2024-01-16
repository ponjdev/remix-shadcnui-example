import { z } from "zod";
import { columns } from "~/components/page/tasks/modules/columns";
import { DataTable } from "~/components/page/tasks/modules/data-table";
import { UserNav } from "~/components/page/tasks/modules/user-nav";
import { tasks } from "~/components/page/tasks/data/tasks";
import { taskSchema } from "~/components/page/tasks/data/schema";

export default function TasksPage() {
  const tasksLists = z.array(taskSchema).parse(tasks);
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasksLists} columns={columns} />
      </div>
    </>
  );
}
