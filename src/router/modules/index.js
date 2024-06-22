import { loadRealPath } from "@/utils";

export const RouteModules = [
	{ 
		path: loadRealPath('/login'), 
		layout: 'auth', 
		permission: 'guest', 
		moduleHTML: loadRealPath('/src/pages/authentication/login/index.html'), 
		moduleJS: loadRealPath('/src/pages/authentication/login/index.js')
	},
	{ 
		path: loadRealPath('/'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/home/index.html'), 
		moduleJS: loadRealPath('/src/pages/home/index.js')
	},
	{ 
		path: loadRealPath('/aluno/cadastro'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/cadastro/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/cadastro/index.js')
	},
	{ 
		path: loadRealPath('/aluno/matricula'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/matricula/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/matricula/index.js')
	},
	{ 
		path: loadRealPath('/aluno/boletim'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/boletim/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/boletim/index.js')
	},
	{ 
		path: loadRealPath('/aluno/frequencia'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/frequencia/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/frequencia/index.js')
	},
	{ 
		path: loadRealPath('/aluno/cancelar-matricula'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/cancelar_matricula/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/cancelar_matricula/index.js')
	},
	{ 
		path: loadRealPath('/aluno/formandos'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/formandos/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/formandos/index.js')
	},
	{ 
		path: loadRealPath('/aluno/certificado-conclusao'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/aluno/certificado_conclusao/index.html'), 
		moduleJS: loadRealPath('/src/pages/aluno/certificado_conclusao/index.js')
	},
	{ 
		path: loadRealPath('/turmas/ativar_inativar'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/turmas/ativar_inativar/index.html'), 
		moduleJS: loadRealPath('/src/pages/turmas/ativar_inativar/index.js')
	},
	{ 
		path: loadRealPath('/turmas/cadastrar'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/turmas/cadastrar/index.html'), 
		moduleJS: loadRealPath('/src/pages/turmas/cadastrar/index.js')
	},
	{ 
		path: loadRealPath('/turmas/lancar_frequencia'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/turmas/lancar_frequencia/index.html'), 
		moduleJS: loadRealPath('/src/pages/turmas/lancar_frequencia/index.js')
	},
	{ 
		path: loadRealPath('/turmas/matricula'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/turmas/matricula/index.html'), 
		moduleJS: loadRealPath('/src/pages/turmas/matricula/index.js')
	},
	{ 
		path: loadRealPath('/turmas/visualizar'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/turmas/visualizar/index.html'), 
		moduleJS: loadRealPath('/src/pages/turmas/visualizar/index.js')
	},
	{ 
		path: loadRealPath('/settings'), 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: loadRealPath('/src/pages/settings/index.html'), 
		moduleJS: loadRealPath('/src/pages/settings/index.js')
	},
];
