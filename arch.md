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
    - h3 - "Clerkie Challenge", "Filter"
    - h4 - Friend Name
    - h5 - "Friend Status"
    - body - friend email, friend phone number
    - chip - badge/chip
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

- primary_text #000000
- secondary_text #ABABAB
- disabled_text #D7D7D7
- white_text #FFFFFF
- green #19B444
- green_light #DCFFE6
- blue #3399FF
- blue_light #DFEFFF
- bg_dark #091928
- bg_light #FFFFFF
- selected #424242
- gray_200 #EAEAEA
- gray_400 #D7D7D7
- gray_600 #ABABAB
- gray_800 #686868
- gray_1000 #424242

## Typography

{ font-family: Inter }

- h1 { font-size: 26px, weight: 600 }
- h2 { font-size: 18px, weight: 700 }
- h3 { font-size: 16px, weight: 600 }
- h4 { font-size: 16px, weight: 700 }
- h5 { font-size: 14px, weight: 500 }
- body { font-size: 14px, weight: 500 }
- label { font-size: 16px, weight: 600 }
- chip { font-size: 12px, weight: 600 }

## Shape

- border-radius: 6px
- border-radius-pill: 30px

# State

/friends

- filter state: managed by page component
- friends state: managed by page component
