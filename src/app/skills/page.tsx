'use client';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiVisualstudiocode, SiPython, SiTypescript, SiHtml5, SiCss3, SiVercel } from 'react-icons/si';

const skills = [
  { id: 1, name: 'React', icon: <FaReact size={50} /> 
},
  { id: 2, name: 'Node.js', icon: <FaNodeJs size={50} /> 
},
  { id: 3, name: 'Java', icon: <FaJava size={50} /> 
},
  { id: 4, name: 'VS Code', icon: <SiVisualstudiocode size={50} /> 
},
  { id: 5, name: 'Python', icon: <SiPython size={50} /> 
},
  { id: 6, name: 'TypeScript', icon: <SiTypescript size={50} /> 
},
  { id: 7, name: 'HTML', icon: <SiHtml5 size={50} /> 
},
  { id: 8, name: 'CSS', icon: <SiCss3 size={50} /> 
},
  { id: 9, name: 'Vercel', icon: <SiVercel size={50} /> 
}
];

const SkillsPage = () => {
  const [props, set] = useSpring(() => ({
    transform: 'rotate(0deg)',
    config: { duration: 500 }
  })
);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: `url('/web-bg.jpg') no-repeat center center fixed`,
        backgroundSize: 'cover',
        padding: '20px'
      }}
    >

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: 'white', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          margin: 0
        }}>
          Here's<br />
          <span style={{ fontSize: '3rem' }}>My Skills</span>
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px'
        }}
      >

        {skills.map(skill => {
          return (
            <animated.div
              key={skill.id}
              style={{
                ...props,
                margin: '20px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',

              }}
            >
              {skill.icon}
              <div style={{ marginTop: '10px', color: 'white' }}>{skill.name}</div>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;