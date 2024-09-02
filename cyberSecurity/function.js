document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    
    const contentDiv = document.getElementById('course-content');

    if (section === 'basics') {
        contentDiv.innerHTML = `
            <h2>Cybersecurity Basics</h2>
            <section>
                <h2>Introduction to Cybersecurity</h2>
                <p>Cybersecurity involves protecting computer systems, networks, and data from digital attacks, unauthorized access, damage, or theft. It ensures the confidentiality, integrity, and availability of information.</p>
                <p><strong>Importance of Cybersecurity:</strong></p>
                <ul>
                    <li><strong>Personal:</strong> Protects sensitive personal information from theft and misuse.</li>
                    <li><strong>Business:</strong> Safeguards company data, intellectual property, and financial assets.</li>
                    <li><strong>Societal:</strong> Prevents damage to critical infrastructure and national security.</li>
                </ul>
            </section>
            <!-- More sections and tasks for basics -->
            <!-- (Same as provided earlier for basics content and tasks) -->
        `;
    } else if (section === 'intermediate') {
        contentDiv.innerHTML = `
            <h2>Cybersecurity Intermediate</h2>
            <section>
                <h2>Proactive Threat Detection</h2>
                <p>Intermediate cybersecurity involves actively searching for and identifying potential threats before they cause harm. This includes understanding common attack vectors and using tools for threat intelligence.</p>
                <p><strong>Common Attack Vectors:</strong></p>
                <ul>
                    <li><strong>Social Engineering:</strong> Manipulating individuals into divulging confidential information.</li>
                    <li><strong>Network Attacks:</strong> Exploiting vulnerabilities in network protocols and configurations.</li>
                    <li><strong>Malware Injections:</strong> Inserting malicious code into legitimate applications.</li>
                </ul>
            </section>
            <section>
                <h2>Threat Intelligence</h2>
                <p>Threat intelligence involves gathering, analyzing, and interpreting information about potential threats to prevent future attacks. It includes understanding the tactics, techniques, and procedures (TTPs) used by attackers.</p>
                <p><strong>Key Components of Threat Intelligence:</strong></p>
                <ul>
                    <li><strong>Indicators of Compromise (IOCs):</strong> Evidence that an attack has occurred, such as malicious IP addresses, file hashes, or domain names.</li>
                    <li><strong>Threat Actor Profiles:</strong> Information about individuals or groups responsible for attacks, including their methods and motives.</li>
                </ul>
            </section>
            <section>
                <h2>Incident Response and Management</h2>
                <p>Incident response involves developing strategies and procedures for responding to cybersecurity incidents. It ensures timely and effective handling of security breaches to minimize damage.</p>
                <p><strong>Incident Response Steps:</strong></p>
                <ul>
                    <li><strong>Preparation:</strong> Establishing policies and procedures for incident response.</li>
                    <li><strong>Detection and Analysis:</strong> Identifying and assessing the impact of an incident.</li>
                    <li><strong>Containment, Eradication, and Recovery:</strong> Containing the incident, eliminating the cause, and restoring systems to normal operation.</li>
                </ul>
            </section>
            <section>
                <h2>Tasks</h2>
                <div class="task">
                    <h3>Task 1: Identify Common Attack Vectors</h3>
                    <p><strong>Objective:</strong> List five common attack vectors and describe how they can be mitigated.</p>
                    <p><strong>Instructions:</strong> Use real-world examples to illustrate each attack vector and provide mitigation strategies.</p>
                </div>
                <div class="task">
                    <h3>Task 2: Create a Threat Actor Profile</h3>
                    <p><strong>Objective:</strong> Develop a profile of a known threat actor group.</p>
                    <p><strong>Instructions:</strong> Include information about their tactics, techniques, and procedures (TTPs), as well as their historical targets.</p>
                </div>
                <div class="task">
                    <h3>Task 3: Incident Response Plan</h3>
                    <p><strong>Objective:</strong> Draft a basic incident response plan for a hypothetical company.</p>
                    <p><strong>Instructions:</strong> Outline the steps for preparation, detection, analysis, containment, eradication, and recovery.</p>
                </div>
            </section>
        `;
    } else if (section === 'advanced') {
        contentDiv.innerHTML = `
            <h2>Cybersecurity Advanced</h2>
            <section>
                <h2>Advanced Threat Detection Techniques</h2>
                <p>Advanced cybersecurity involves sophisticated methods for detecting and responding to threats. This includes techniques like anomaly detection, behavioral analysis, and machine learning.</p>
                <p><strong>Anomaly Detection:</strong> Identifying unusual patterns of behavior that may indicate a security threat.</p>
                <p><strong>Behavioral Analysis:</strong> Monitoring user and system behavior to detect deviations from normal activity.</p>
            </section>
            <section>
                <h2>Incident Management and Ethical Hacking</h2>
                <p>Incident management involves handling complex security incidents, coordinating with multiple teams, and minimizing the impact on business operations. Ethical hacking is used to identify vulnerabilities before malicious hackers can exploit them.</p>
                <p><strong>Penetration Testing:</strong> Simulating attacks to identify vulnerabilities.</p>
                <p><strong>Red Team vs. Blue Team Exercises:</strong> Red team simulates attackers, while blue team defends against attacks to test and improve security measures.</p>
            </section>
            <section>
                <h2>Risk Management and Compliance</h2>
                <p>Risk management involves identifying, assessing, and mitigating risks to an organization's information assets. Compliance ensures that organizations adhere to laws, regulations, and industry standards.</p>
                <p><strong>Risk Assessment:</strong> Evaluating the likelihood and impact of potential security threats.</p>
                <p><strong>Compliance Standards:</strong> Examples include GDPR, HIPAA, and PCI-DSS.</p>
            </section>
            <section>
                <h2>Tasks</h2>
                <div class="task">
                    <h3>Task 1: Anomaly Detection</h3>
                    <p><strong>Objective:</strong> Design a system to detect anomalies in network traffic.</p>
                    <p><strong>Instructions:</strong> Specify the types of anomalies you would look for and the tools you would use for detection.</p>
                </div>
                <div class="task">
                    <h3>Task 2: Penetration Testing Plan</h3>
                    <p><strong>Objective:</strong> Create a penetration testing plan for a small business.</p>
                    <p><strong>Instructions:</strong> Outline the scope, tools, and methods you would use, along with the objectives of the test.</p>
                </div>
                <div class="task">
                    <h3>Task 3: Compliance Audit</h3>
                    <p><strong>Objective:</strong> Conduct a mock compliance audit for a healthcare organization.</p>
                    <p><strong>Instructions:</strong> Identify key compliance standards (e.g., HIPAA), and create a checklist to evaluate the organization's adherence to these standards.</p>
                </div>
            </section>
        `;
    } else {
        contentDiv.innerHTML = '<h2>Course not found.</h2>';
    }
});
