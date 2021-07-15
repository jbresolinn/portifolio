import styles from '../styles/components/navbar.module.scss'

export const Navbar = () => {
  const menu = [
    { path: '/bio', description: 'Bio' },
    { path: '/lab', description: 'Laboratório' },
    { path: '/articles', description: 'Artigos' }
  ]

  return (
    <nav className={styles.container}>
      <div>
        <img src="/images/logo.svg" alt="julia bresolin logo" />
      </div>
      <div>
        {menu.map(item => (
          <a href={item.path} key={item.path}>
            {item.description}
          </a>
        ))}
      </div>
    </nav>
  )
}
