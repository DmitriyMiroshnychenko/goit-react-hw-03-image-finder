import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { IoSearch, IoMoon, IoSunny } from 'react-icons/io5';

export class Searchbar extends Component {
  state = {
    searchQery: '',
  };

  handleSearchQuery = event => {
    this.setState({ searchQery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQery.trim() === '') {
      toast.error('The input field is empty!');
      return;
    }

    this.props.onSubmit(this.state.searchQery);
    this.setState({ searchQery: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar} onSubmit={this.handleSubmit}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
            <IoSearch className={styles['SearchForm-icon']} />
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            name="searchQuery"
            value={this.state.searchQery}
            onChange={this.handleSearchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>

        <div className={styles.ThemeSwitcher}>
          <input
            className={styles['ThemeSwitcher-checkbox']}
            type="checkbox"
            onChange={this.props.changeTheme}
          />
          <IoSunny
            className={`${styles['SearchForm-icon']} ${styles['SearchForm-icon--sun']}`}
          />
          <IoMoon
            className={`${styles['SearchForm-icon']} ${styles['SearchForm-icon--moon']}`}
          />
        </div>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
