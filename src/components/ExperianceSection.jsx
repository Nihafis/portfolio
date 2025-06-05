import { Building, Building2 } from "lucide-react";

export const ExperianceSection = () => {
  return (
    <section id="experiance" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My
          <span className="text-primary"> Experiance</span>
        </h2>
        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-6 border-b border-border pb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Junior Full Stack Web Developer{" "}
              </h3>
              <p className="font-semibold mb-6">
                WinWin Interactive Co., Ltd.{" "}
                <span className="text-primary"> Dec 2022 - present</span>
              </p>
            </div>
            <p className="text-muted-foreground mb-6 text-justify">
              - Developed a web-based tool system used CodeIgniter (e.g., CMS)
              for user input, file uploads, transaction handling, data
              validation, and content management.
              <br />- Built{" "}
              <span className="text-primary">
                {" "}
                RESTful APIs and web services
              </span>{" "}
              using PHP, Node.js, and MySQL, with JWT-based authentication and
              authorization.
              <br />- Improved API performance through{" "}
              <span className="text-primary"> Redis </span> caching and request
              optimization.
              <br />- Integrated third-party services including SMS/email
              providers, Leaflet, Clerk, and external APIs.
              <br />- Designed and optimized scalable{" "}
              <span className="text-primary">MySQL </span> database structures
              for new systems and features. MySQL
              <br />- Created{" "}
              <span className="text-primary"> responsive UI</span> using
              Bootstrap and Tailwind CSS (Flowbite, Shadcn) for enhanced user
              experience.
            </p>
          </div>
          <div className="space-y-6 border-b border-border pb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Internships Web Developer
              </h3>
              <p className="font-semibold mb-6">
                WinWin Interactive Co., Ltd.{" "}
                <span className="text-primary"> Sep 2022 - Nov 2022</span>
              </p>
            </div>
            <p className="text-muted-foreground mb-6 text-justify">
              - Collaborated with the admin team to handle user issues and
              inquiries.
              <br />- Published news and events, and developed features like
              reward-claiming and user rankings to support app promotion.
              <br />- Integrated Line Notify and Telegram Bot for automated
              notifications.
              <br />- Implemented scheduled report generation and dynamic Excel
              exports for daily, monthly, and yearly analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
