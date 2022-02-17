
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type StateType = {
    dialogs: Array<DialogType>
    messages: MessageType[]
    posts: Array<PostType>
}

export let state: StateType = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Piter'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Sofia'},
        {id: 6, name: 'Oleg'},
        {id: 7, name: 'Sergey'},
        {id: 8, name: 'Alina'},
        {id: 9, name: 'Oksana'},
        {id: 10, name: 'Igor'},
        {id: 11, name: 'Vlad'},
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi.'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: "I'm fine!"},
    ],
    posts: [
        {id: 1, message: 'React', likesCount: 5},
        {id: 2, message: 'Redux', likesCount: 6},
        {id: 3, message: 'HTML', likesCount: 12},
        {id: 4, message: 'CSS', likesCount: 2},
        {id: 5, message: 'Angular', likesCount: 14},
        {id: 6, message: 'JS', likesCount: 14},
    ]
}
