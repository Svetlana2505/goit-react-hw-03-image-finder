import { Component } from 'react';
import { Form, Input, Button, Header } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  formSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.formSubmit}>
          <Button type="submit">
            <span>Search</span>
          </Button>

          <Input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
        </Form>
      </Header>
    );
  }
}
