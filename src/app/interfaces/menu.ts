
export interface Menu {
    label: string,
    icon: string,
    link: string,
    badge: string,
    selected: boolean,
    children: Array<Menu>
}
