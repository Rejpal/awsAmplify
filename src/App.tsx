import React, { useCallback, useState } from "react";
import { Alert } from "./components/Alert";
import { CreateAlertForm } from "./components/forms/CreateAlert";

const description =
  "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.";
const title = "Alert heading";
const longTitle =
  "This is a very long title for an Alert banner that the banner should completely acomodate because not doing so would be detrimental for user's experience.";

const defaultAlerts = [
  { title, description: "Short description of an error", viewDetails: true },
  { title, description, viewDetails: true },
  { title: longTitle, description, viewDetails: true },
  { title: longTitle, description: "No details provided", viewDetails: false },
];

export default function PrimeRevenue() {
  const [alerts, setAlerts] = useState(defaultAlerts);

  const handleClose = useCallback((id: number) => {
    setAlerts((prevAlerts) => {
      return prevAlerts.filter((value, index) => index !== id);
    });
  }, []);

  const createAlert = (formData: FormData) => {
    let title = formData.get("title") as string | null ?? '';
    if (title === "") title = "Title can't be empty.";
    const newAlert = {
      title,
      description: formData.get("description") as | string ?? '',
      viewDetails: Boolean(Number(formData.get("viewDetails") as '0' | '1' ?? 0)),
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        PrimeRevenue
      </h1>
      <main className="flex flex-col items-center sm:items-start bg-gray-300 p-3">
        {alerts.map(({ description, title, viewDetails }, index) => (
          <Alert
            description={description}
            title={title}
            onViewDetails={viewDetails ? () => {} : undefined}
            onClose={() => handleClose(index)}
          />
        ))}

        <h2 className="text-2xl py-2 font-semibold text-gray-900 dark:text-gray-100">
          Add alert:
        </h2>
        <CreateAlertForm onSubmit={createAlert} />
      </main>
    </div>
  );
}
