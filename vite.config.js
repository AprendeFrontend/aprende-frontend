import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// Permite que al recargar una ruta sea redirigida al index.html
		// y React Router maneje la URL
		historyApiFallback: true
	}
});
