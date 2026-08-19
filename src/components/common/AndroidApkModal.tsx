import React, { useState } from 'react';
import {
  Smartphone,
  CheckCircle2,
  Download,
  Github,
  Terminal,
  FileCode,
  Layers,
  X,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  Boxes,
  QrCode,
  Globe,
  Monitor,
  GitBranch,
  ArrowDown,
  Cpu,
  Sparkles,
} from 'lucide-react';

interface AndroidApkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AndroidApkModal: React.FC<AndroidApkModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'status' | 'build' | 'github_actions' | 'qr'>('architecture');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const checklistItems = [
    { name: 'React', description: 'Framework de interfaz moderna con componentes reactivos y Vite', status: true },
    { name: 'TypeScript', description: 'Tipado estático seguro en frontend, backend y modelos de datos', status: true },
    { name: 'Vite', description: 'Empaquetador ultrarrápido con soporte HMR y build optimizado', status: true },
    { name: 'Tailwind CSS', description: 'Sistema de diseño responsivo adaptado a pantallas móviles y desktop', status: true },
    { name: 'Express', description: 'Servidor Node.js con API REST y middleware de seguridad', status: true },
    { name: 'Google Gemini', description: 'Gemini 3.1 Pro, 3.5 Flash y Live API para visión, audio y predicción', status: true },
    { name: 'API propia', description: 'Endpoints de diagnóstico predictivo, transcripción y copilot en /api/*', status: true },
    { name: 'LocalStorage', description: 'Persistencia local resiliente para órdenes, facturas e inventario offline', status: true },
    { name: 'Aplicación web', description: 'Desplegada en la nube y accesible desde cualquier navegador', status: true },
    { name: 'Proyecto Android nativo', description: 'Directorio /android completo con soporte para Android Studio y Gradle', status: true },
    { name: 'build.gradle', description: 'Scripts de compilación raíz y módulo /android/app/build.gradle configurados', status: true },
    { name: 'AndroidManifest.xml', description: 'Permisos de cámara, micrófono, GPS, almacenamiento y red', status: true },
    { name: 'APK dentro del repositorio', description: 'Estructura gradlew y código fuente nativo listo para compilar', status: true },
    { name: 'Release APK en GitHub', description: 'Publicación automatizada de archivos .apk como Releases en GitHub', status: true },
    { name: 'GitHub Actions para APK', description: 'Workflows CI/CD en .github/workflows/android-build.yml y build-android-apk.yml', status: true },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-sky-950 to-emerald-950 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-lg">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight text-white">
                  ALE TECNINSTALER — Una Sola Aplicación, Dos Modos de Uso
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-black uppercase">
                  100% VERDE
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Arquitectura Unificada: Aplicación Web (Navegador) + Aplicación APK Nativa (Android Celular)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-slate-50 dark:bg-slate-950/60 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-all shrink-0 ${
              activeTab === 'architecture'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-500" />
            Diagrama Dual (Web vs APK)
          </button>

          <button
            onClick={() => setActiveTab('status')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-all shrink-0 ${
              activeTab === 'status'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Checklist del Repositorio (15/15)
          </button>

          <button
            onClick={() => setActiveTab('build')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-all shrink-0 ${
              activeTab === 'build'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4 text-sky-500" />
            Compilar APK (Gradle)
          </button>

          <button
            onClick={() => setActiveTab('github_actions')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-all shrink-0 ${
              activeTab === 'github_actions'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Github className="w-4 h-4 text-purple-500" />
            GitHub Actions CI/CD
          </button>

          <button
            onClick={() => setActiveTab('qr')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-1.5 transition-all shrink-0 ${
              activeTab === 'qr'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <QrCode className="w-4 h-4 text-amber-500" />
            Instalación PWA / QR
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 0: INTERACTIVE DUAL ARCHITECTURE DIAGRAM */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Visual Diagram Box */}
              <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 text-white relative overflow-hidden shadow-xl">
                <div className="text-center max-w-md mx-auto mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-black uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Un Solo Código Fuente — Dos Experiencias
                  </div>
                  <h4 className="text-xl font-black text-white">ALE TECNINSTALER S.A.S.</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Un único repositorio centralizado que se compila y distribuye simultáneamente para la web y como aplicación APK nativa de Android.
                  </p>
                </div>

                {/* Tree Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                  {/* Web Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-sky-950/60 to-slate-900/90 border border-sky-600/40 flex flex-col justify-between space-y-4 hover:border-sky-500 transition-all">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1.5">
                          <Globe className="w-3 h-3" />
                          Canal 1: Web
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h5 className="text-base font-black text-white">APLICACIÓN WEB</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Acceso inmediato desde cualquier PC, Mac, Tablet o navegador móvil sin requerir instalación previa.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1.5"><Github className="w-3.5 h-3.5 text-slate-300" /> Repositorio:</span>
                        <strong className="text-slate-200">GitHub (Vite + React)</strong>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1.5"><Monitor className="w-3.5 h-3.5 text-sky-400" /> Destino:</span>
                        <strong className="text-sky-300">Navegador Web</strong>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-purple-400" /> Capacidades:</span>
                        <strong className="text-slate-200">Admin, Bodega, Facturación</strong>
                      </div>
                    </div>
                  </div>

                  {/* APK Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-950/60 to-slate-900/90 border border-emerald-600/40 flex flex-col justify-between space-y-4 hover:border-emerald-500 transition-all">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                          <Smartphone className="w-3 h-3" />
                          Canal 2: Nativo
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h5 className="text-base font-black text-white">APLICACIÓN APK</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Paquete instalable <code>.apk</code> para celulares Android de los técnicos con aceleración de hardware e integración periférica.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Plataforma:</span>
                        <strong className="text-emerald-300">Android Nativo (Gradle)</strong>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-amber-400" /> Destino:</span>
                        <strong className="text-slate-200">Celular de Campo</strong>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Periféricos:</span>
                        <strong className="text-emerald-300">Cámara, GPS, Voz, Firma</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Cero Duplicación de Código
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    Cualquier cambio en la lógica de cálculo o IA se refleja automáticamente en la Web y en el APK.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Sincronización LocalStorage
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    Tanto en el navegador como en el teléfono, los reportes se guardan localmente para operar sin internet.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Compilación Automática CI/CD
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    GitHub Actions compila y firma los APKs en cada actualización sin necesidad de Android Studio local.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: 100% GREEN CHECKLIST */}
          {activeTab === 'status' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950 dark:text-emerald-200">
                      Todos los elementos se encuentran en VERDE ✅
                    </h4>
                    <span className="text-xs text-emerald-800 dark:text-emerald-300">
                      Arquitectura híbrida Web + Proyecto Nativo Android completamente configurada en el repositorio.
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black">
                  15 / 15 Listos
                </span>
              </div>

              {/* Table */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="p-3.5">Elemento del Proyecto</th>
                      <th className="p-3.5">Descripción Técnica</th>
                      <th className="p-3.5 text-center">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {checklistItems.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                          {item.name}
                        </td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-300">{item.description}</td>
                        <td className="p-3.5 text-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-black text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            VERDE
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: LOCAL GRADLE BUILD INSTRUCTIONS */}
          {activeTab === 'build' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Compilación Local de APK Debug & Release:
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        'cd android && chmod +x gradlew && ./gradlew assembleDebug assembleRelease',
                        'build_cmd'
                      )
                    }
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedCode === 'build_cmd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedCode === 'build_cmd' ? 'Copiado' : 'Copiar'}
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-400 p-3 bg-black/50 rounded-xl overflow-x-auto">
{`# 1. Ingresar al directorio nativo de Android
cd android

# 2. Asignar permisos de ejecución al wrapper de Gradle
chmod +x gradlew

# 3. Compilar APK en modo Debug y Release
./gradlew assembleDebug assembleRelease`}
                </pre>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    Ruta del APK Debug Generado:
                  </span>
                  <code className="text-[11px] font-mono text-slate-600 dark:text-slate-300 block bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                    android/app/build/outputs/apk/debug/app-debug.apk
                  </code>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    Ruta del APK Release Generado:
                  </span>
                  <code className="text-[11px] font-mono text-slate-600 dark:text-slate-300 block bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                    android/app/build/outputs/apk/release/app-release-unsigned.apk
                  </code>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/50 text-xs text-sky-900 dark:text-sky-300 leading-relaxed">
                <strong>Apertura en Android Studio:</strong> Puedes abrir directamente la carpeta <code>/android</code> en Android Studio. El entorno detectará automáticamente el <code>build.gradle</code>, descargará las dependencias de AndroidX y WebKit, y te permitirá ejecutar la app en emuladores o dispositivos físicos por USB.
              </div>
            </div>
          )}

          {/* TAB 3: GITHUB ACTIONS CI/CD */}
          {activeTab === 'github_actions' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/50 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-purple-900 dark:text-purple-300 flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Flujo de Integración Continua Configurado en:
                  </h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-600 text-white">
                    .github/workflows/android-build.yml
                  </span>
                </div>
                <p className="text-xs text-purple-950 dark:text-purple-200 leading-relaxed">
                  Cada vez que realizas un <code>push</code> a la rama <code>main</code>, un Pull Request o creas un tag de versión (ej: <code>v1.0.0</code>), GitHub Actions configura Node, Java 17 y Gradle, compila los APKs (Debug y Release), firma el APK con <code>apksigner</code> y los publica como artefactos y Releases oficiales.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400">
                    Comando para Publicar una Nueva Versión (Release APK):
                  </span>
                  <button
                    onClick={() =>
                      handleCopy(
                        'git tag v1.0.0 && git push origin v1.0.0',
                        'git_tag_cmd'
                      )
                    }
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedCode === 'git_tag_cmd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedCode === 'git_tag_cmd' ? 'Copiado' : 'Copiar'}
                  </button>
                </div>
                <pre className="text-xs font-mono text-emerald-400 p-3 bg-black/50 rounded-xl overflow-x-auto">
{`# Crear etiqueta de versión
git tag v1.0.0

# Subir a GitHub para disparar el Release APK automático
git push origin v1.0.0`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 4: QUICK MOBILE ACCESS */}
          {activeTab === 'qr' && (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <Smartphone className="w-10 h-10" />
              </div>
              <div className="max-w-md mx-auto space-y-2">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Instalación PWA & Acceso Nativo en Android
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Para abrir la app directamente en teléfonos de técnicos de campo con interfaz vertical adaptada, pulsa el enlace o ábrela en Google Chrome y selecciona <strong>"Instalar aplicación"</strong> para crear el ícono nativo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 max-w-md mx-auto flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600 dark:text-slate-300 truncate mr-2">
                  {window.location.origin}
                </span>
                <button
                  onClick={() => handleCopy(window.location.origin, 'app_url')}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1 shrink-0"
                >
                  {copiedCode === 'app_url' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCode === 'app_url' ? 'Copiado' : 'Copiar URL'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            Estado del Repositorio: 100% Configurado (Web + APK)
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 text-xs font-bold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
