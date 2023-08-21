import Profile from "../Profile";
import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.reload();
	};

	return (
		<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>General login</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		<div>
			<Profile/>
		</div>
		</>
	);
};

export default Main;
