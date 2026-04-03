

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
                Software Developer
              </h3>
              <p className="font-semibold mb-6 text-wrap">
                Advanced Info Services (AIS)
                <span className="text-primary"> Jul 2025 - Present</span>
              </p>
            </div>

            <ul className="text-muted-foreground mb-6 space-y-2 list-disc pl-5 text-justify">
              <li>
                Build and maintain scalable, secure <span className="text-primary">backend services</span> using
                <span className="text-primary"> NestJS, TypeScript</span>, and microservices architecture.
              </li>
              <li>
                Implemented secure virtual bank registration and authentication using <span className="text-primary">cryptographic verification</span> (App Attest, Huawei Integrity, and Android Attestation).  </li>
              <li>
                Develop event-driven systems with <span className="text-primary">Kafka</span> for distributed communication.
              </li>
              <li>
                Implemented <span className="text-primary">Redis</span> for caching, rate limiting, and token/device blacklisting,
                with <span className="text-primary">Pub/Sub</span> for real-time event handling.
              </li>
              <li>
                Built real-time features using <span className="text-primary">WebSocket (Socket.IO)</span>.
              </li>

              <li>
                Designed and optimized <span className="text-primary">MongoDB</span> schemas and aggregation pipelines.
              </li>

              <li>
                Containerized applications with <span className="text-primary">Docker</span> and managed deployments via
                <span className="text-primary"> GitHub Actions</span> and <span className="text-primary">ArgoCD</span> (GitOps).
              </li>

              <li>
                Managed secrets securely using <span className="text-primary">Azure Key Vault</span>.
              </li>

              <li>
                Implemented <span className="text-primary">unit testing</span>, centralized logging, and monitoring with the
                <span className="text-primary"> Elastic Stack</span> (Elasticsearch, Kibana).
              </li>

              <li>
                Designed and developed <span className="text-primary">REST APIs</span> following clean architecture and best practices.
              </li>
            </ul>
          </div>
          <div className="space-y-6 border-b border-border pb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Junior Full Stack Web Developer
              </h3>
              <p className="font-semibold mb-6 text-wrap">
                WinWin Interactive Co., Ltd.
                <span className="text-primary"> Dec 2022 - Present</span>
              </p>
            </div>

            <ul className="text-muted-foreground mb-6 space-y-2 list-disc pl-5 text-justify">
              <li>
                Developed web-based systems (e.g., CMS) using <span className="text-primary">CodeIgniter</span> for user input,
                file uploads, transaction handling, validation, and content management.
              </li>

              <li>
                Built <span className="text-primary">RESTful APIs</span> using PHP, Node.js, and
                <span className="text-primary"> MySQL</span> with JWT-based authentication and authorization.
              </li>

              <li>
                Improved performance using <span className="text-primary">Redis</span> caching and request optimization.
              </li>

              <li>
                Integrated third-party services such as SMS/email providers, <span className="text-primary">Leaflet</span>,
                <span className="text-primary"> Clerk</span>, and external APIs.
              </li>

              <li>
                Designed and optimized scalable <span className="text-primary">MySQL</span> database structures.
              </li>

              <li>
                Developed <span className="text-primary">responsive UI</span> using Bootstrap and Tailwind CSS
                (Flowbite, Shadcn) to enhance user experience.
              </li>
            </ul>
          </div>

          <div className="space-y-6 border-b border-border pb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Web Developer Intern
              </h3>
              <p className="font-semibold mb-6 text-wrap">
                WinWin Interactive Co., Ltd.
                <span className="text-primary"> Sep 2022 - Nov 2022</span>
              </p>
            </div>

            <ul className="text-muted-foreground mb-6 space-y-2 list-disc pl-5 text-justify">
              <li>
                Collaborated with the admin team to resolve user issues and support operations.
              </li>

              <li>
                Developed features such as reward claiming and user rankings to support application engagement.
              </li>

              <li>
                Integrated notification systems using <span className="text-primary">LINE Notify</span> and
                <span className="text-primary"> Telegram Bot</span>.
              </li>

              <li>
                Automated reporting with scheduled jobs and dynamic Excel exports for daily, monthly, and yearly analytics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
