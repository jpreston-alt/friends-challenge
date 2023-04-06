# Component Hierarchy

[Component Hierarchy](https://www.figma.com/file/rJuuNkMfWiEMQr9ysJts6J/Clerkie_Challenge_Diagram?node-id=1-20&t=IBizVA1WVsioQ418-0)

## Atoms

- Icon:
  - variants:
    - ClerkieIcon
    - HomeIcon
    - FriendsIcon
    - FilterIcon
    - Close
  - colors:
    - primary
    - white
- Text
  - variants:
    - h1 - "Welcome to the Clerkie Challenge!"
    - h2 - "Home"/"Friends" (Page Names)
    - h3 - "Clerkie Challenge", NavItems, Friend Name, "Filter"
    - body - friend email, friend phone number
    - subtitle - badge/chip, "Friend Status"
    - label - checkbox labels
  - colors:
    - primary - "Home"
    - secondary - friend email, friend phone number
    - white - "Clerkie Challenge"
- Container
- Button:
  - variants:
    - primary
    - outlined
    - text
- Badge/Chip
- Loader

## Molecules

- MenuItem
- NavBar
- Checkbox
  - box
  - label
- FriendCard
- LoaderCard

## Organisms

- SideNav
- PageTemplate/Layout
- FilterDropdown
- List
  - can use for MenuItems, Checkboxes, FriendCard

## Pages

- /home
- /friends
- /friends/[slug]

# Theme

## Colors

- primary (#000000)
- secondary (#ABABAB)
- white (#FFFFFF)

## Typography

- h1 { font-size: 28px, weight: 600 }
- h2
- h3
- body
- subtitle
- label

## State

/friends

- filter state: managed by page component
