import { FaJava } from 'react-icons/fa6'
import { FiCode } from 'react-icons/fi'
import {
  SiCss,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const skillIcons = Object.freeze({
  api: Object.freeze({ Icon: TbApi, color: '#009688' }),
  csharp: Object.freeze({ Icon: SiSharp, color: '#512bd4' }),
  css: Object.freeze({ Icon: SiCss, color: '#1572b6' }),
  figma: Object.freeze({ Icon: SiFigma, color: '#f24e1e' }),
  github: Object.freeze({ Icon: SiGithub }),
  html: Object.freeze({ Icon: SiHtml5, color: '#e34f26' }),
  java: Object.freeze({ Icon: FaJava, color: '#007396' }),
  javascript: Object.freeze({ Icon: SiJavascript, color: '#f7df1e' }),
  mysql: Object.freeze({ Icon: SiMysql, color: '#4479a1' }),
  node: Object.freeze({ Icon: SiNodedotjs, color: '#339933' }),
  php: Object.freeze({ Icon: SiPhp, color: '#777bb4' }),
  postgresql: Object.freeze({ Icon: SiPostgresql, color: '#4169e1' }),
  react: Object.freeze({ Icon: SiReact, color: '#61dafb' }),
  tailwind: Object.freeze({ Icon: SiTailwindcss, color: '#06b6d4' }),
  vercel: Object.freeze({ Icon: SiVercel }),
  vite: Object.freeze({ Icon: SiVite, color: '#646cff' }),
  vue: Object.freeze({ Icon: SiVuedotjs, color: '#42b883' }),
})

function SkillBadge({ icon, name }) {
  const { Icon, color } = skillIcons[icon] ?? { Icon: FiCode }

  return (
    <li className="interactive group flex min-h-14 items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-soft">
      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-background text-lg text-foreground transition-transform group-hover:scale-110">
        <Icon aria-hidden="true" style={color ? { color } : undefined} />
      </span>
      <span className="text-body-sm font-semibold text-foreground">{name}</span>
    </li>
  )
}

export default SkillBadge
