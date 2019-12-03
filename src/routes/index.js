import About from '../components/App/About.vue'
import Editor from '../components/Work/Editor/Editor.vue'
import EditorDescription from '../components/Work/Editor/EditorDescription.vue'
import EditorParameteres from '../components/Work/Editor/EditorParametres.vue'
import EditorFiles from '../components/Work/Editor/EditorFiles.vue'
import NodePanel from '../components/Work/NodePanel/NodePanel.vue'
import Workspace from '../components/Work/Workspace/Workspace.vue'

const routes = [
  { path: '/editor', component: Editor },
  { path: '/editor/description', component: EditorDescription },
  { path: '/editor/parameters', component: EditorParameteres },
  { path: '/editor/files', component: EditorFiles },
  { path: '/about', component: About },
  { path: '/nodepanel', component: NodePanel },
  { path: '/workspace', component: Workspace }
]

export default routes
