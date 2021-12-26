export type Node<Annotation> = {
    kindName: string
    value: string
    annotation: Annotation
    children: {
        forEach(callback: ($: Node<Annotation>) => void): void
    }
}