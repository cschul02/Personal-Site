import React, { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  // CUSTOMIZE THESE SECTIONS
  const portfolioData = {
    name: "Your Name",
    title: "Full Stack Developer",
    tagline: "Building beautiful web experiences",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    
    about: "I'm a passionate developer focused on creating clean, intuitive web applications. I love solving problems and learning new technologies.",
    
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with payment integration",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        image: "🛒"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        tags: ["React", "Firebase", "Tailwind"],
        link: "#",
        image: "✓"
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Beautiful weather app with location-based forecasts",
        tags: ["React", "API", "Charts"],
        link: "#",
        image: "⛅"
      },
    ],
    
    skills: [
      { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
      { category: "Tools", items: ["Git", "VS Code", "Docker", "Figma"] },
    ],
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background-primary)', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'var(--color-background-secondary)',
        borderBottom: '1px solid var(--color-border-tertiary)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <h1 style={{ fontSize: '18px', fontWeight: 500, margin: 0, color: 'var(--color-text-primary)' }}>
            Portfolio
          </h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer',
                  color: activeSection === section 
                    ? 'var(--color-text-primary)' 
                    : 'var(--color-text-secondary)',
                  fontWeight: activeSection === section ? 500 : 400,
                  textTransform: 'capitalize',
                  padding: '0.5rem 0',
                  borderBottom: activeSection === section 
                    ? '2px solid var(--color-text-primary)' 
                    : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Home Section */}
        {activeSection === 'home' && (
          <section style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div style={{ fontSize: '80px', marginBottom: '1rem' }}>👨‍💻</div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 500,
              margin: '0 0 0.5rem 0',
              color: 'var(--color-text-primary)',
            }}>
              {portfolioData.name}
            </h1>
            <p style={{
              fontSize: '24px',
              color: 'var(--color-text-secondary)',
              margin: '0 0 1rem 0',
            }}>
              {portfolioData.title}
            </p>
            <p style={{
              fontSize: '18px',
              color: 'var(--color-text-tertiary)',
              margin: '0 0 2rem 0',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              {portfolioData.tagline}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a
                href={`mailto:${portfolioData.email}`}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--color-text-primary)',
                  color: 'var(--color-background-primary)',
                  border: 'none',
                  borderRadius: 'var(--border-radius-lg)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Get in touch
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '1px solid var(--color-border-secondary)',
                  backgroundColor: 'transparent',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--border-radius-lg)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--color-background-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                View GitHub
              </a>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section style={{ padding: '4rem 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '2rem', color: 'var(--color-text-primary)' }}>
              About me
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: '80px' }}>🚀</div>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
              }}>
                {portfolioData.about}
              </p>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section style={{ padding: '4rem 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '3rem', color: 'var(--color-text-primary)' }}>
              Featured projects
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}>
              {portfolioData.projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    padding: '2rem',
                    backgroundColor: 'var(--color-background-secondary)',
                    borderRadius: 'var(--border-radius-lg)',
                    border: '1px solid var(--color-border-tertiary)',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-primary)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-tertiary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '1rem' }}>
                    {project.image}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    margin: '0 0 0.5rem 0',
                    color: 'var(--color-text-primary)',
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    margin: '0 0 1rem 0',
                    lineHeight: '1.6',
                  }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '12px',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'var(--color-background-tertiary)',
                          color: 'var(--color-text-secondary)',
                          borderRadius: 'var(--border-radius-md)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section style={{ padding: '4rem 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '3rem', color: 'var(--color-text-primary)' }}>
              Skills
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}>
              {portfolioData.skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    marginBottom: '1rem',
                    color: 'var(--color-text-primary)',
                  }}>
                    {skillGroup.category}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}>
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        style={{
                          padding: '0.75rem 0',
                          fontSize: '14px',
                          color: 'var(--color-text-secondary)',
                          borderBottom: '1px solid var(--color-border-tertiary)',
                        }}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section style={{ padding: '4rem 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '2rem', color: 'var(--color-text-primary)' }}>
              Get in touch
            </h2>
            <div style={{
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
                Feel free to reach out to me for any opportunities or just to connect!
              </p>
              
              <div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', margin: '0 0 0.5rem 0' }}>
                  Email
                </p>
                <a
                  href={`mailto:${portfolioData.email}`}
                  style={{
                    fontSize: '16px',
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  {portfolioData.email}
                </a>
              </div>

              <div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-tertiary)', margin: '0 0 0.5rem 0' }}>
                  Social links
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    GitHub
                  </a>
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-primary)',
                      textDecoration: 'none',
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-background-secondary)',
        borderTop: '1px solid var(--color-border-tertiary)',
        marginTop: '4rem',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          margin: 0,
        }}>
          © 2024 {portfolioData.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
