import GlobalStyle from './styles/globalStyles';
import { Paragraph, Text, Heading, Menu, Button } from './components';

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Menu items={[
            { value: 'Features', href: '#' },
            { value: 'Pricing', href: '#' },
            { value: 'Blog', href: '#' },
            { value: <Button> Try it for free </Button> }
          ]}
        />
        <Heading level="h1"> Hiring Process - Frontend </Heading>
        <Heading level="h2"> Hiring Process - Frontend </Heading>
        <Text> Body text </Text>
        <Paragraph>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste cum voluptates culpa unde pariatur dolorum minima vel quam. Repellat facere officia modi sequi atque debitis. Commodi eaque quos qui? </Paragraph>
      </div>
    </>
  )
}

export default App
