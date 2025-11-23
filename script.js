const projects = [
    {
        id: 'transport-center',
        title: 'Transport Center Website + Automated Support',
        category: 'Automation & Full Stack',
        image: './photos/center-transportation-homepage.png',
        stack: ['EJS', 'Node.js', 'IBM Macros', 'Enterprise Automation'],
        description: 'Full organizational site + automated support processes (password reset, user creation). Automated 35,000+ incidents.',
        role: 'Full Stack & Automation',
        impact: 'Eliminated 24/7 support center',
        details: {
            overview: 'A comprehensive digital ecosystem for the Transport Center, serving as the central hub for operations, information, and support. The system revolutionized how the unit handles IT support by automating the vast majority of routine requests.',
            features: [
                'Automated Password Resets: Users can reset network passwords without human intervention.',
                'User Creation Automation: Scripts that automatically generate user accounts across multiple systems.',
                'Central Information Hub: A unified portal for all unit news, updates, and resources.',
                'Incident Tracking: Real-time monitoring of support request status.'
            ],
            technical: 'Built with Node.js and EJS for the web interface, integrated with Python and IBM Macros for low-level legacy system automation.',
            images: ['./photos/center-transportation-homepage.png']
        }
    },
    {
        id: 'commander-dashboard',
        title: 'Commander Dashboard',
        category: 'Business Intelligence',
        image: './photos/commander-dashboard.jpg',
        stack: ['React', 'PowerShell', 'Enterprise Integrations'],
        description: 'Central dashboard for manpower, missions, maintenance, presence. Enabled fast data-driven command decisions.',
        role: 'Data Pipelines & Dashboard',
        impact: 'Data-driven command decisions',
        details: {
            overview: 'A high-level executive dashboard for unit commanders. It aggregates data from logistics, HR, and operations systems to provide a real-time snapshot of unit readiness.',
            features: [
                'Real-time Metrics: Live data on personnel and equipment.',
                'Drill-down Capability: Click to see detailed reports.',
                'Alerts: Automatic highlighting of critical issues.',
                'Enterprise Integration: Pulls data directly from enterprise ERP systems.'
            ],
            technical: 'React dashboard consuming data processed by PowerShell scripts from legacy enterprise system exports.',
            images: ['./photos/commander-dashboard.jpg', './photos/commanger-dashboard2.jpg']
        }
    },
    {
        id: 'truck-tube',
        title: 'TruckTube – Training Video Platform',
        category: 'Media Platform',
        image: './photos/trucktube.jpg',
        stack: ['React', 'Node.js', 'Streaming'],
        description: 'Unified truck-training videos into a single platform. Reduced in-person briefings.',
        role: 'Interface & API',
        impact: 'Reduced in-person briefings',
        details: {
            overview: 'A "YouTube-like" platform specifically for military driving instruction videos. It allows soldiers to watch briefings and tutorials on demand.',
            features: [
                'Video Categorization: Organized by vehicle type and lesson.',
                'Watch History: Tracks which soldiers have watched mandatory safety briefings.',
                'Search & Filter: Fast access to specific training modules.',
                'Mobile Compatible: Accessible on personal devices.'
            ],
            technical: 'React frontend with a custom video streaming backend.',
            images: ['./photos/trucktube.jpg']
        }
    },
    {
        id: 'remote-contractor',
        title: 'Remote Contractor Signature System',
        category: 'Legal & Workflow',
        image: './photos/kablanim.jpg',
        stack: ['React', 'Node.js', 'SQLite', 'PDF Generator'],
        description: 'Digitized a fully manual contractor signature workflow. Contractors receive a secure link, sign remotely, and the system automatically generates and stores PDFs.',
        role: 'Architecture, UI, Backend',
        impact: 'Eliminated lost documents',
        details: {
            overview: 'A secure system for managing external contractor agreements. It handles the entire lifecycle from document generation to digital signature and archival.',
            features: [
                'Secure Links: Time-limited access links sent via SMS/Email.',
                'Digital Signature: Canvas-based signature capture.',
                'PDF Generation: Auto-generates legally binding PDF documents.',
                'Archive: Searchable database of all signed contracts.'
            ],
            technical: 'React frontend, Node.js backend with PDFKit for document generation.',
            images: [],
            note: 'Photos unavailable due to secrecy of the project'
        }
    },
    {
        id: 'digital-hub',
        title: 'Digital Hub',
        category: 'Integration Platform',
        image: './photos/digitalgub-homepage.jpg',
        stack: ['React', 'PWA', 'API Gateway'],
        description: 'A central hub connecting all army phone user apps into a single interface.',
        role: 'Architect & Developer',
        impact: 'Unified user experience',
        details: {
            overview: 'The Digital Hub serves as the "App Store" and single sign-on portal for all mobile applications used by soldiers. It unifies disparate tools into one cohesive experience.',
            features: [
                'Single Sign-On: One login for all operational apps.',
                'App Discovery: Catalog of available tools and utilities.',
                'Notifications: Centralized push notifications from all connected apps.',
                'Cross-App Data: Shared context between different operational tools.'
            ],
            technical: 'Progressive Web App (PWA) acting as a shell and gateway for micro-frontends.',
            images: ['./photos/digitalgub-homepage.jpg']
        }
    },
    {
        id: 'shifts',
        title: 'Automatic Duty Scheduling System',
        category: 'Algorithm & Logic',
        image: './photos/shifts2.jpg',
        stack: ['React', 'Node.js', 'SQLite', 'Constraint Solving'],
        description: 'Collects soldier constraints and auto-generates monthly duty schedules. Saved hours of manual planning.',
        role: 'Design, Logic, DB, UI',
        impact: 'Saved hours of manual planning',
        details: {
            overview: 'An intelligent scheduling system that takes into account complex constraints (availability, rank, previous shifts, fairness) to automatically generate optimal duty rosters.',
            features: [
                'Constraint Collection: Easy interface for soldiers to submit their availability.',
                'Fairness Algorithm: Ensures equal distribution of difficult shifts (weekends, nights).',
                'Conflict Resolution: Automatically flags and resolves scheduling conflicts.',
                'One-Click Generation: Generates a full month schedule in seconds.'
            ],
            technical: 'React frontend with a Node.js backend. The core scheduling logic uses a custom constraint satisfaction algorithm.',
            images: ['./photos/shifts2.jpg', './photos/shifts.jpg']
        }
    },
    {
        id: 'helpdesk',
        title: 'Helpdesk – Ticketing System',
        category: 'Management System',
        image: '',
        stack: ['React', 'Node.js', 'SQLite'],
        description: 'Ticket management system with assignment, status tracking, dashboards. Reduced workload by tens of percent.',
        role: 'Full Stack',
        impact: 'Reduced workload significantly',
        details: {
            overview: 'A robust ticketing system designed to manage IT and logistical support requests within the unit. It replaced phone calls and sticky notes with a structured, trackable digital workflow.',
            features: [
                'Ticket Assignment: Auto-assign tickets to relevant departments.',
                'SLA Tracking: Monitor response times and resolution rates.',
                'Dashboard Analytics: Visual insights into common issues and team performance.',
                'Status Updates: Automated email/SMS notifications to users.'
            ],
            technical: 'SPA built with React, communicating via REST API to a Node.js/SQLite backend.',
            images: ['./photos/hovala-aautomations-page.png']
        }
    },
    {
        id: 'truck-learning',
        title: 'Military Truck Training Management',
        category: 'Training & Education',
        image: './photos/Screenshot 2025-11-23 at 15.25.28.png',
        stack: ['React', 'SQLite', 'Tablet UI'],
        description: 'Replaced manual truck-training paperwork with a complete digital system tracking hours, exceptions, loads, and tests.',
        role: 'UI, Logic Engine, Dashboard',
        impact: 'Increased accuracy & oversight',
        details: {
            overview: 'A tablet-first application used by driving instructors to track student progress, driving hours, and practical test results in real-time.',
            features: [
                'Digital Logbooks: Replaced paper logs with digital entry.',
                'Progress Tracking: Visual graphs of student improvement.',
                'Regulatory Compliance: Ensures all training hours meet strict military standards.'
            ],
            technical: 'React application optimized for touch interfaces on tablets.',
            images: ['./photos/truck-leasrning.png', './photos/trucklearning2.png']
        }
    }
];

const resumeData = {
    name: 'Ariel Argevany',
    title: 'AI Architect & Automation Specialist | Full-Stack Developer',
    contact: {
        address: 'Ha-Nadiv 15 Hertzelia, Israel',
        email: 'arielargevany2004@gmail.com',
        phone: '+972 53 286 1226'
    },
    summary: 'AI Architect & AI Automation Specialist, and Full-Stack Developer with strong UX/UI capabilities. Possesses a solid background in IT, automation, and full-stack engineering, with extensive experience in designing, building, and deploying advanced, large-scale systems and modern websites across both closed military networks and standard web environments. Highly skilled in intelligent system architecture, end-to-end automation pipelines, and the creation of user-centered digital products for both military and commercial use.',
    experience: [
        {
            company: 'MakeitX',
            role: 'Co-Founder & Tech Lead',
            date: '2025 - Now',
            description: 'A boutique tech studio specializing in custom applications, modern websites, and advanced AI-driven automation solutions for businesses.',
            points: [
                'Design and build end-to-end digital systems that enhance customer engagement.',
                'Create scalable, high-impact workflows combining full-stack development and intelligent automation.',
                'Deliver fast, reliable, and results-focused solutions for clients across multiple industries.'
            ]
        },
        {
            company: 'Israeli Defense Forces (IDF), C4I Unit',
            role: 'Product Manager & Lead Developer',
            date: '2022 – 2025 (+ Active Reserve Duty)',
            description: 'Served in the IDF within the C4I Corps, progressing from Cipher Security Operator to IT & Network Administration, then to full-scale software development.',
            points: [
                'Led the development of seven mission-critical platforms that automated over 35,000 operational incidents.',
                'Reduced communication load by 80–90% through advanced workflow engineering.',
                'Replaced phone-based support workflow, saving 6–10 hours of manual call handling per day.',
                'Eliminated the need for 24/7 weekend staffing, establishing new digital standards across the unit.'
            ]
        },
        {
            company: 'Private Tutoring',
            role: 'Owner',
            date: '2023 – Now',
            description: 'Taught and mentored dozens of students in Math and Physics.',
            points: [
                'Focused on strengthening core understanding and closing knowledge gaps.',
                'Provided personalized learning plans and ongoing support.',
                'Received excellent feedback through WhatsApp Business page.'
            ]
        }
    ],
    education: [
        {
            institution: 'Handesaim Engineering High School',
            degree: '35 Units (Math, Physics, English, Engineering Science, Integrated Technology, Robotics)',
            date: '2019–2022'
        },
        {
            institution: 'IDF C4I SCHOOL',
            degree: 'Administration Course + Cipher Security Course',
            date: '2022–2023'
        }
    ],
    certifications: [
        'Product Management certification – (IITC) — 2024',
        'UX/UI Design certification – John Bryce — 2024',
        'CCNA – Cisco Certified Network Associate (IITC) — 2025',
        'Advanced AI & Software Development – Self-Learning — 2023–Now'
    ],
    skills: {
        'Soft Skills': ['Fast Learner', 'High Ownership', 'Communication Skills', 'Works Well Under Pressure', 'Creativity & Critical Thinking', 'Self-Taught'],
        'Technical Skills': ['React', 'Node.js', 'JavaScript', 'EJS', 'REST API', 'SQL', 'AI Automation', 'UX/UI', 'Figma', 'Git', 'LLM Integrations', 'Network Fundamentals']
    }
};

// Define categories globally
const pcAppsIds = ['transport-center', 'commander-dashboard', 'truck-learning', 'helpdesk', 'shifts'];
const phoneAppsIds = ['truck-tube', 'remote-contractor', 'digital-hub'];

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupModals();
    setupAnimations();
    playWelcomeAnimation();
});

function playWelcomeAnimation() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeText = document.getElementById('welcome-text');
    const heroSection = document.querySelector('.hero-section');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const scrollBtn = document.querySelector('.scroll-btn');

    // Hide hero elements initially
    heroSection.style.opacity = '0';
    heroTitle.style.opacity = '0';
    heroSubtitle.style.opacity = '0';
    scrollBtn.style.opacity = '0';

    // Stage 1: Show "Welcome" (already visible via CSS animation)
    // Stage 2: After 1.5s, transition to "Projects by Ariel Argevany"
    setTimeout(() => {
        welcomeText.style.opacity = '0';

        setTimeout(() => {
            welcomeText.innerHTML = 'Projects by <span class="gradient-text">Ariel Argevany</span>';
            welcomeText.style.opacity = '1';
        }, 400);
    }, 1500);

    // Stage 3: Create a clone and animate it to hero position
    setTimeout(() => {
        // Make hero section visible but keep title hidden
        heroSection.style.opacity = '1';
        heroSection.style.transition = 'opacity 2s ease-out';

        // Create an absolutely positioned clone that will move
        const clone = welcomeText.cloneNode(true);
        clone.id = 'welcome-text-clone';
        document.body.appendChild(clone);

        // Get positions
        const welcomeRect = welcomeText.getBoundingClientRect();
        const heroRect = heroTitle.getBoundingClientRect();

        // Position clone exactly where welcome text is
        clone.style.position = 'fixed';
        clone.style.top = welcomeRect.top + 'px';
        clone.style.left = welcomeRect.left + 'px';
        clone.style.width = welcomeRect.width + 'px';
        clone.style.margin = '0';
        clone.style.zIndex = '10000';
        clone.style.pointerEvents = 'none';

        // Copy initial styles
        const welcomeStyles = window.getComputedStyle(welcomeText);
        clone.style.fontSize = welcomeStyles.fontSize;
        clone.style.fontWeight = welcomeStyles.fontWeight;
        clone.style.letterSpacing = welcomeStyles.letterSpacing;
        clone.style.color = welcomeStyles.color;
        clone.style.fontFamily = welcomeStyles.fontFamily;

        // Hide original welcome text
        welcomeText.style.opacity = '0';

        // Start background fade
        welcomeScreen.style.transition = 'background-color 2s ease-out';
        welcomeScreen.style.backgroundColor = 'transparent';

        // Animate clone to hero position
        requestAnimationFrame(() => {
            clone.style.transition = 'all 2s cubic-bezier(0.33, 1, 0.68, 1)';

            requestAnimationFrame(() => {
                // Get hero styles
                const heroStyles = window.getComputedStyle(heroTitle);

                // Move to hero position
                clone.style.top = heroRect.top + 'px';
                clone.style.left = heroRect.left + 'px';
                clone.style.width = heroRect.width + 'px';

                // Match hero text styles
                clone.style.fontSize = heroStyles.fontSize;
                clone.style.fontWeight = heroStyles.fontWeight;
                clone.style.letterSpacing = heroStyles.letterSpacing;
                clone.style.lineHeight = heroStyles.lineHeight;
                clone.style.textAlign = heroStyles.textAlign;
            });
        });

        // After animation, crossfade to real hero title
        setTimeout(() => {
            clone.style.transition = 'opacity 0.3s ease-out';
            clone.style.opacity = '0';

            heroTitle.style.transition = 'opacity 0.3s ease-in';
            heroTitle.style.opacity = '1';

            // Fade in other hero elements
            setTimeout(() => {
                heroSubtitle.style.transition = 'opacity 0.8s ease-out';
                heroSubtitle.style.opacity = '1';
                scrollBtn.style.transition = 'opacity 0.8s ease-out';
                scrollBtn.style.opacity = '0.8';
            }, 300);

            // Clean up
            setTimeout(() => {
                welcomeScreen.remove();
                clone.remove();
            }, 800);
        }, 2000);

    }, 3500); // Total: 1.5s (welcome) + 2s (projects by)
}

function renderProjects() {
    const grid = document.getElementById('projects');
    grid.innerHTML = ''; // Clear existing content

    // Helper to render a project card
    const createCard = (project, index) => `
        <article class="project-card" data-id="${project.id}" style="animation-delay: ${index * 100}ms">
            <div class="card-image-wrapper" onclick="openProjectModal('${project.id}')" style="cursor: pointer;">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="card-overlay"></div>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h2 class="project-title">${project.title}</h2>
                    <div class="tech-stack">
                        ${project.stack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <div class="meta-item">
                        <span class="label">Role</span>
                        <span class="value">${project.role}</span>
                    </div>
                    <div class="meta-item">
                        <span class="label">Impact</span>
                        <span class="value">${project.impact}</span>
                    </div>
                </div>
                <button class="view-details-btn" onclick="openProjectModal('${project.id}')">View Details</button>
            </div>
        </article>
    `;

    // Render PC Apps
    const pcApps = projects.filter(p => pcAppsIds.includes(p.id));
    if (pcApps.length > 0) {
        const pcSection = document.createElement('div');
        pcSection.innerHTML = `
            <h2 class="section-title">PC Apps</h2>
            <div class="projects-grid-inner pc-apps" style="display: grid; grid-template-columns: 1fr; gap: 4rem;">
                ${pcApps.map((p, i) => createCard(p, i)).join('')}
            </div>
        `;
        // Note: We are injecting this into 'projects-grid' which already has grid styles. 
        // To avoid nested grid issues, we might want to reset the parent grid or just append elements directly.
        // Actually, 'projects-grid' in CSS is display: grid. 
        // If we want headers, we should probably change the structure.
        // Let's append the header and then the cards? No, we want separation.

        // Better approach: The parent #projects is a grid. We can make it display: block or flex column via inline style 
        // so we can have headers and sub-grids.
        grid.style.display = 'flex';
        grid.style.flexDirection = 'column';
        grid.style.gap = '4rem';

        grid.innerHTML += `
            <div class="project-section">
                <h2 class="section-title">PC Apps</h2>
                <div class="projects-grid-inner" style="display: grid; grid-template-columns: 1fr; gap: 4rem;">
                    ${pcApps.map((p, i) => createCard(p, i)).join('')}
                </div>
            </div>
        `;
    }

    // Render Phone Apps
    const phoneApps = projects.filter(p => phoneAppsIds.includes(p.id));
    if (phoneApps.length > 0) {
        grid.innerHTML += `
            <div class="project-section">
                <h2 class="section-title">Phone Apps</h2>
                <div class="projects-grid-inner phone-apps projects-grid"> 
                    ${phoneApps.map((p, i) => createCard(p, i)).join('')}
                </div>
            </div>
        `;
        // Note: added 'projects-grid' class to the inner div to inherit some styles, 
        // but we need to be careful about the grid-template-columns.
        // The 'phone-apps' class will handle the 2-column layout on mobile.
        // On desktop, it should probably still be 1 column or maybe grid?
        // The CSS I added for .projects-grid.phone-apps handles mobile. 
        // For desktop, it defaults to whatever .projects-grid has (1fr).
    }

    // Re-initialize intersection observer for new elements
    setupAnimations();
}

function setupAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        observer.observe(card);

        // Tilt effect (Desktop only)
        if (window.matchMedia("(min-width: 769px)").matches) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -2;
                const rotateY = ((x - centerX) / centerX) * 2;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        }
    });

    // Dynamic Scroll Effect (Mobile & Desktop)
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardCenter = cardTop + (card.offsetHeight / 2);
            const windowCenter = window.innerHeight / 2;

            // Calculate distance from center (0 to 1)
            const distFromCenter = Math.abs(windowCenter - cardCenter);
            const maxDist = window.innerHeight / 2;
            const normalizedDist = Math.min(distFromCenter / maxDist, 1);

            // Scale effect based on scroll position (only if visible)
            if (card.classList.contains('visible') && window.innerWidth <= 768) {
                // Subtle scale down as it moves away from center
                const scale = 1 - (normalizedDist * 0.05);
                card.style.transform = `scale(${scale})`;
            }
        });
    });
}

function setupModals() {
    // Project Modal
    const projectModal = document.getElementById('project-modal');
    const projectClose = projectModal.querySelector('.modal-close');

    projectClose.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Resume Modal
    const resumeModal = document.getElementById('resume-modal');
    const resumeClose = resumeModal.querySelector('.modal-close');
    const resumeTrigger = document.getElementById('resume-trigger');

    resumeTrigger.addEventListener('click', () => {
        renderResume();
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    resumeClose.addEventListener('click', () => {
        resumeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (e.target === resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

window.openProjectModal = function (id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const modalBody = document.querySelector('#project-modal .modal-body');

    // Combine hero image and gallery images for the viewer
    const allImages = [project.image, ...project.details.images];
    // Remove duplicates if hero image is also in details.images
    const uniqueImages = [...new Set(allImages)];

    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-hero-image" onclick="openFullscreenViewer('${project.id}')" style="cursor: pointer;">
        <div class="modal-details">
            <h2 class="modal-title">${project.title}</h2>
            <h3 class="modal-subtitle">${project.role}</h3>
            
            <div class="modal-section-title">Overview</div>
            <p class="modal-text">${project.details.overview}</p>

            <div class="modal-section-title">Key Features</div>
            <ul class="resume-list" style="margin-bottom: 2rem; padding-left: 1rem;">
                ${project.details.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <div class="modal-section-title">Technical Details</div>
            <p class="modal-text">${project.details.technical}</p>

            ${project.details.images && project.details.images.length > 0 ? `
                <div class="modal-section-title">Gallery</div>
                <div class="modal-gallery">
                    ${project.details.images.map(img => `<img src="${img}" alt="Project Screenshot" onclick="openFullscreenViewer('${project.id}')">`).join('')}
                </div>
            ` : project.details.note ? `
                <div class="modal-section-title">Gallery</div>
                <p class="modal-text" style="font-style: italic; color: var(--text-muted);">${project.details.note}</p>
            ` : ''}
        </div>
    `;

    document.getElementById('project-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.openFullscreenViewer = function (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const isPcApp = pcAppsIds.includes(projectId);

    // Create viewer if it doesn't exist
    let viewer = document.querySelector('.fullscreen-viewer');
    if (!viewer) {
        viewer = document.createElement('div');
        viewer.className = 'fullscreen-viewer';
        document.body.appendChild(viewer);
    }

    // Collect all unique images
    const allImages = [project.image, ...project.details.images];
    const uniqueImages = [...new Set(allImages)].filter(img => img); // Filter out empty strings

    // Build content
    let contentHtml = `
        <button class="fullscreen-close">&times;</button>
        <div class="fullscreen-content">
            ${uniqueImages.map(img => `
                <div class="fullscreen-image-wrapper">
                    <img src="${img}" class="fullscreen-image" alt="${project.title}">
                </div>
            `).join('')}
        </div>
    `;

    // Add animation for PC apps (only on mobile devices)
    if (isPcApp && window.innerWidth <= 768) {
        contentHtml += `
            <div class="turn-phone-animation">
                <div class="phone-icon"></div>
                <div class="turn-text">Turn your phone</div>
            </div>
        `;
    }

    viewer.innerHTML = contentHtml;

    // Event listeners
    const closeBtn = viewer.querySelector('.fullscreen-close');
    closeBtn.onclick = () => {
        viewer.classList.remove('active');
        setTimeout(() => viewer.remove(), 300); // Remove after transition
    };

    viewer.onclick = (e) => {
        if (e.target === viewer || e.target.classList.contains('fullscreen-image-wrapper')) {
            viewer.classList.remove('active');
            setTimeout(() => viewer.remove(), 300);
        }
    };

    // Show viewer
    viewer.classList.add('active');

    // Handle PC App Logic (only on mobile)
    if (isPcApp && window.innerWidth <= 768) {
        const content = viewer.querySelector('.fullscreen-content');
        const animation = viewer.querySelector('.turn-phone-animation');

        content.style.opacity = '0'; // Hide images initially

        setTimeout(() => {
            animation.style.opacity = '0';
            animation.style.transition = 'opacity 0.5s';
            setTimeout(() => animation.remove(), 500);

            content.style.opacity = '1';
            content.style.transition = 'opacity 0.5s';
        }, 2000);
    }
};

function renderResume() {
    const resumeBody = document.querySelector('.resume-body');
    resumeBody.innerHTML = `
        <div class="modal-details">
            <div class="resume-header">
                <h1 class="resume-name">${resumeData.name}</h1>
                <div class="resume-role">${resumeData.title}</div>
                <div class="resume-contact">
                    <span>${resumeData.contact.address}</span>
                    <span>${resumeData.contact.email}</span>
                    <span>${resumeData.contact.phone}</span>
                </div>
            </div>

            <div class="resume-section">
                <div class="modal-section-title">Professional Summary</div>
                <p class="modal-text">${resumeData.summary}</p>
            </div>

            <div class="resume-section">
                <div class="modal-section-title">Work Experience</div>
                ${resumeData.experience.map(exp => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <div class="resume-item-title">${exp.company}</div>
                            <div class="resume-item-date">${exp.date}</div>
                        </div>
                        <div class="resume-item-subtitle">${exp.role}</div>
                        <p class="resume-item-description">${exp.description}</p>
                        <ul class="resume-list">
                            ${exp.points.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="resume-section">
                <div class="modal-section-title">Education</div>
                ${resumeData.education.map(edu => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <div class="resume-item-title">${edu.institution}</div>
                            <div class="resume-item-date">${edu.date}</div>
                        </div>
                        <div class="resume-item-subtitle">${edu.degree}</div>
                    </div>
                `).join('')}
            </div>

            <div class="resume-section">
                <div class="modal-section-title">Certifications</div>
                <ul class="resume-list">
                    ${resumeData.certifications.map(cert => `<li>${cert}</li>`).join('')}
                </ul>
            </div>

            <div class="resume-section">
                <div class="modal-section-title">Skills</div>
                <div class="skills-grid">
                    ${Object.entries(resumeData.skills).map(([category, skills]) => `
                        <div class="skill-category">
                            <h4>${category}</h4>
                            <div class="skill-tags">
                                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

