import React, { PureComponent, createRef } from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown/DropdownContainer';
import image from '../assets/lisa.png';
import Avatar from '../Avatar/Avatar';

export default class UserMenu extends PureComponent {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { name } = this.props;

    return (
      <UserMenuWrap
        ref={this.containerRef}
        onClick={this.openDropdown}
      >
        <Avatar image={image} />

        <UserName>{name}</UserName>
        {isDropdownOpen && <Dropdown />}
      </UserMenuWrap>
    );
  }
};

const UserMenuWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const UserName = styled.p`
  color: #5c007a;
  font-size: 16px;
`;
