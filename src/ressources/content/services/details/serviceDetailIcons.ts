import iconCheck from '@/assets/icons/iconCheck.webp'
import iconDeadline from '@/assets/icons/iconDeadline.webp'
import iconEssentielle from '@/assets/icons/iconEssentielle.webp'
import iconFor from '@/assets/icons/iconFor.webp'
import iconOption from '@/assets/icons/iconOption.webp'
import iconPremium from '@/assets/icons/iconPremium.webp'
import iconStarter from '@/assets/icons/iconStarter.webp'
import iconSupport from '@/assets/icons/iconSupport.webp'
import type { ImageContent } from '@/ressources/content/contentTypes'

export const serviceDetailIcons = {
    iconStarter: {
        src: iconStarter,
        alt: '',
    },
    iconEssentielle: {
        src: iconEssentielle,
        alt: '',
    },
    iconPremium: {
        src: iconPremium,
        alt: '',
    },
    iconCheck: {
        src: iconCheck,
        alt: '',
    },
    iconFor: {
        src: iconFor,
        alt: '',
    },
    iconOption: {
        src: iconOption,
        alt: '',
    },
    iconDeadline: {
        src: iconDeadline,
        alt: '',
    },
    iconSupport: {
        src: iconSupport,
        alt: '',
    },
} as const satisfies Record<string, ImageContent>

export type ServiceDetailIconName = keyof typeof serviceDetailIcons
