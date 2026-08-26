import type { Metadata } from 'next';
import { AgreementField } from '@/components/forms/AgreementField';
import { FormField } from '@/components/forms/FormField';
import { PrimaryLink } from '@/components/forms/PrimaryLink';
import { ScreenIntro } from '@/components/layout/ScreenIntro';
import layoutStyles from '@/components/layout/screen-layout.module.css';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'Crear cuenta',
	description:
		'Crea tu cuenta en Carideal y comienza a buscar el seminuevo ideal para ti.',
	alternates: {
		canonical: '/',
	},
};
// Test to deploy

export default function CreateAccountPage() {
	return (
		<main className={layoutStyles.page}>
			<section
				className={layoutStyles.content}
				aria-labelledby='create-account-title'
			>
				<ScreenIntro title='Crear cuenta' titleId='create-account-title'>
					Completa tus datos para
					<br />
					comenzar.
				</ScreenIntro>

				<form className={styles.form} aria-label='Crear cuenta'>
					<div className={styles.fields}>
						<FormField
							autoComplete='name'
							id='full-name'
							label='Nombre completo'
							name='fullName'
							type='text'
						/>
						<FormField
							autoComplete='email'
							id='email'
							label='Correo electrónico'
							name='email'
							type='email'
						/>
						<FormField
							autoComplete='tel'
							id='mobile-phone'
							label='Teléfono móvil'
							name='mobilePhone'
							type='tel'
						/>
					</div>

					<div className={styles.actions}>
						<AgreementField id='terms-accepted' />
						<PrimaryLink href='/welcome-location'>Crear cuenta</PrimaryLink>
					</div>
				</form>
			</section>
		</main>
	);
}
