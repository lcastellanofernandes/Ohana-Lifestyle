import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface LinkCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  href: string;
  color?: 'orange' | 'gold' | 'gray';
}

/**
 * LinkCard Component
 * Design: Minimalismo Moderno - Cards com hover elevado e feedback visual
 * Cores: Laranja primário, ouro secundário, cinza neutro
 * Animações: Transições suaves em 200ms, escala ao hover
 */
export default function LinkCard({
  title,
  description,
  icon,
  href,
  color = 'orange',
}: LinkCardProps) {
  const colorClasses = {
    orange: 'hover:bg-green-50 border-green-100 hover:border-green-200',
    gold: 'hover:bg-amber-50 border-amber-100 hover:border-amber-200',
    gray: 'hover:bg-gray-50 border-gray-100 hover:border-gray-200',
  };

  const iconColorClasses = {
    orange: 'text-green-600',
    gold: 'text-amber-500',
    gray: 'text-gray-400',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 rounded-xl border-2 transition-all duration-200 ease-out
        hover:shadow-lg hover:scale-105 active:scale-98
        ${colorClasses[color]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1 group-hover:text-green-700 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
        </div>
        <div className={`flex-shrink-0 text-2xl ${iconColorClasses[color]} group-hover:translate-x-1 transition-transform`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-green-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        Abrir
        <ArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
}
