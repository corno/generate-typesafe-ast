export type Node<Annotation> = {
    kindName: string
    annotation: Annotation
    children: {
        forEach(callback: ($: Node<Annotation>) => void): void
    }
}