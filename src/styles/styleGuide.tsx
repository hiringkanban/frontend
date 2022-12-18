export const colors:any = {
    primary: 'rgba(93, 95, 239)',
    white: 'rgba(254, 252, 252, 1)',
    gray: 'rgba(151, 151, 151, 0.5)',
    green: 'rgba(54, 159, 71, 1)',
    blue: 'rgba(10, 88, 132, 1)',
    black: 'rgba(0, 0, 0,)',
    red: 'rgba(216, 67, 67, 1)',
}

export const fontWeight:any = {
    light: '300',
    normal: '400',
    bold: '500',
    extraBold: '700'
}

export const fontSize:any = {

    // Use as main header on a page - H1
    main_heading: '30px', 

    // Use as secondary header on a page - H2
    secondary_heading: '24px',

    // Use after heading, profile page headings - H3
    tertiary_heading: '24px',

    // Use for subtitles, group name, subheading in admin - H4
    fourth_heading: '18px',

    // Use as subtitles for paragraphs - H5
    fifth_heading: '16px',

    // Use for general text or labels
    text: '0.875rem',

    // Use for item name, text in update
    paragraph: '18px',

    // Use for subtexts
    subtext: '14px',

}

export const textColors:any = {
    // Use for default text color
    primary_text_color: 'rgba(63, 134, 199, 1)',

    // Use when you need text with lesser importance
    secondary_text_color: 'rgb(83 87 104);',

    // Inverted text color (opposite of primary text color)
    inverted_text: '',

    // Use for placeholder text in inputs fields
    placeholder_color: '',

    //Use only for links
    links_color: 'rgba(97, 97, 255)'
}

export const buttonVariant: {[key: string ]: string} = {
    primary: colors.primary,
    default: colors.white
}

export const buttonSize: any = {
    large: '0.75em 1.5em',
    medium: '0.5em 1em',
    small: '0.25em 0.5em'
}

export const borderRadius = '0.3em';