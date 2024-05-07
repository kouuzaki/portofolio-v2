interface TimeLineData {
  title: string;
  jobdesk: string;
  description: string;
  date: string;
}

interface TimeLineProps {
  title: string;
  data: TimeLineData[];
}

export function Timeline({ title, data }: TimeLineProps) {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto md:max-w-3xl lg:max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">
          {title}
        </h2>
        <div className="relative border-l border-gray-300 dark:border-gray-600">
          <div className="space-y-8">
            {data.map((item, i) => (
              <div className="relative pl-6" key={i}>
                <div className="absolute -left-3 top-1 h-6 w-6 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white dark:bg-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.jobdesk}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-3xl">
                  {item.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
