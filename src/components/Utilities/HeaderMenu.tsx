interface HeaderMenuProps {
    title: string
}

export default function HeaderMenu({title} : HeaderMenuProps) {
    return (
        <div>
            <div className="p-8">
                <h3 className="text-center text-2xl text-color-primary">{title}</h3>
            </div>
        </div>
    )
}