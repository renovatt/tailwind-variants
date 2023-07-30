import { ComponentProps, ElementType } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { CiCircleCheck } from 'react-icons/ci'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

const button = tv({
    base: "flex items-center justify-center font-medium bg-zinc-500 text-white rounded-full m-2 active:opacity-80",
    variants: {
        color: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-purple-500 text-white",
            third: "bg-red-500 text-white",
            success: "bg-emerald-500 text-white",
            loading: "bg-pink-600 text-white",
        },
        size: {
            default: "h-10 w-44 px-4",
            sm: "text-xs p-1",
            md: "text-base p-1",
            lg: "px-4 py-3 text-lg",
        },
    },
    defaultVariants: {
        size: "default",
    }
});

type BtnProps = ComponentProps<'button'> & VariantProps<typeof button> & {
    success?: boolean;
    loading?: boolean;
    icon?: ElementType | null;
}

export default function Button({
    success = false,
    loading = false,
    icon: Icon,
    size,
    color,
    ...props
}: BtnProps) {
    return (
        <button className={button({ size, color })} {...props}>
            {success && !loading ? <CiCircleCheck className='h-4 w-4' /> :
                !success && loading ? (
                    <>
                        <CgSpinnerTwoAlt className='h-4 w-4 animate-spin transition-all' />
                        <p className='p-2'>Carregando..</p>
                    </>
                ) : Icon && <Icon className='h-4 w-4' />}
            {props.children}
        </button>
    )
}
