/**
 * data/modules.js
 * Definición de los Bloques Estructurales y Módulos de la Encuesta Nacional de Salud.
 * Proporciona el contexto global de clasificación y conteo de preguntas.
 */

const ModulesData = {
    "BLOQUE_1": {
        id: "BLOQUE_1",
        name: "Identificación y Caracterización",
        description: "Variables sociodemográficas iniciales, caracterización territorial y régimen de afiliación en salud.",
        color: "var(--color-base-azul)"
    },
    "BLOQUE_2": {
        id: "BLOQUE_2",
        name: "Pregunta Trazadora (B0)",
        description: "Filtro dicotómico principal para identificar el uso y acceso efectivo a los servicios de salud en los últimos 6 meses.",
        color: "var(--color-decision-naranja)"
    },
    "BLOQUE_3": {
        id: "BLOQUE_3",
        name: "Gestión Institucional",
        description: "Clasificación de entidades y sub-servicios específicos que operaron en la atención del ciudadano.",
        color: "var(--color-entidad-verde)"
    },
    "MODULO_EPS_M1": {
        id: "MODULO_EPS_M1",
        name: "EPS Módulo 1",
        description: "Formulario enfocado en población que no reporta uso de servicios de salud. Evalúa barreras de acceso generales.",
        questionsCount: 27,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_EPS_M2": {
        id: "MODULO_EPS_M2",
        name: "EPS Módulo 2",
        description: "Formulario especializado en otros servicios de EPS (Urgencias, Internación, Especializado) o canales no farmacológicos del gestor.",
        questionsCount: 36,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_EPS_M3": {
        id: "MODULO_EPS_M3",
        name: "EPS Módulo 3",
        description: "Formulario para la evaluación de servicios ambulatorios de consulta externa gestionados vía EPS.",
        questionsCount: 34,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_IPS_M1": {
        id: "MODULO_IPS_M1",
        name: "IPS Módulo 1",
        description: "Formulario de evaluación de servicios ambulatorios directamente prestados por la red de IPS.",
        questionsCount: 34,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_IPS_M2": {
        id: "MODULO_IPS_M2",
        name: "IPS Módulo 2",
        description: "Formulario de evaluación del servicio de urgencias y atención de emergencias en la red hospitalaria.",
        questionsCount: 32,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_IPS_M3": {
        id: "MODULO_IPS_M3",
        name: "IPS Módulo 3",
        description: "Formulario enfocado en internación, hospitalización permanente y estancias hospitalarias.",
        questionsCount: 29,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_IPS_M4": {
        id: "MODULO_IPS_M4",
        name: "IPS Módulo 4",
        description: "Formulario detallado para la evaluación de procedimientos quirúrgicos y cirugías.",
        questionsCount: 33,
        color: "var(--color-modulo-morado)"
    },
    "MODULO_GESTOR_M1": {
        id: "MODULO_GESTOR_M1",
        name: "Gestor Módulo 1",
        description: "Formulario especializado para operadores de farmacia y entrega efectiva de medicamentos y dispositivos médicos.",
        questionsCount: 34,
        color: "var(--color-modulo-morado)"
    }
};

// Congelar el objeto para asegurar la inmutabilidad de los datos maestros de los bloques
Object.freeze(ModulesData);
