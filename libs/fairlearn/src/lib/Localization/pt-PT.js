module.exports = {
  loremIpsum:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  defaultClassNames: "Classe {0}",
  defaultFeatureNames: "Funcionalidade sensível {0}",
  defaultSingleFeatureName: "Funcionalidade sensível",
  defaultCustomMetricName: "Métrica personalizada {0}",
  accuracyTab: "Equidade no Desempenho",
  opportunityTab: "Equidade na Oportunidade",
  modelComparisonTab: "Comparação de modelos",
  tableTab: "Vista de Detalhes",
  dataSpecifications: "Estatísticas de dados",
  attributes: "Atributos",
  singleAttributeCount: "1 funcionalidade sensível",
  attributesCount: "{0} funcionalidades sensíveis",
  instanceCount: "{0} instâncias",
  close: "Fechar",
  calculating: "A calcular...",
  accuracyMetricLegacy: "Métrica de desempenho",
  errorOnInputs:
    "Erro na entrada. As funcionalidades sensíveis têm de ser valores categóricos neste momento. Mapeie os valores para as categorias discretizadas e tente novamente.",
  Accuracy: {
    header: "Como quer medir o desempenho?",
    modelMakes: "o modelo faz",
    modelsMake: "os modelos fazem",
    body:
      "Os dados contêm {0} etiquetas e {2} {1} predições. Com base nessa informação, recomendamos as seguintes métricas. Selecione uma métrica da lista.",
    binaryClassifier: "classificador binário",
    probabalisticRegressor: "regressor probit",
    regressor: "regressor",
    binary: "binário",
    continuous: "contínuo"
  },
  Parity: {
    header: "Equidade medida em termos de disparidade",
    body:
      "As métricas de disparidade quantificam a variação do comportamento do seu modelo nas funcionalidades selecionadas. Há dois tipos de métricas de disparidade: mais novidades em breve...."
  },
  Header: {
    title: "Fairlearn",
    documentation: "Documentação"
  },
  Footer: {
    back: "Anterior",
    next: "Seguinte"
  },
  Intro: {
    welcome: "Bem-vindo ao",
    fairlearnDashboard: "Dashboard do Fairlearn",
    introBody:
      "O dashboard do Fairlearn permite avaliar compromissos entre desempenho e equidade dos seus modelos",
    explanatoryStep:
      "Para configurar a avaliação, é necessário especificar uma funcionalidade sensível e uma métrica de desempenho.",
    getStarted: "Introdução",
    features: "Funcionalidades sensíveis",
    featuresInfo:
      "As funcionalidades sensíveis servem para dividir os seus dados em grupos. A equidade do seu modelo entre estes grupos é medida por métricas de disparidade. As métricas de disparidade quantificam a variação do comportamento do seu modelo entre estes grupos.",
    accuracy: "Métrica de desempenho",
    accuracyInfo:
      "As métricas de desempenho servem para avaliar a qualidade global do seu modelo, bem como a qualidade do seu modelo em cada grupo. A diferença entre os valores extremos da métrica de desempenho entre os grupos é reportada como a disparidade no desempenho."
  },
  ModelComparison: {
    title: "Comparação de modelos",
    howToRead: "Como ler este gráfico",
    lower: "mais baixa",
    higher: "mais alta",
    howToReadText:
      "Este gráfico representa cada um dos {0} modelos como um ponto selecionável. O eixo x representa {1}, sendo que {2} é melhor. O eixo y representa a disparidade, sendo que mais baixa é melhor.",
    insights: "Informações",
    insightsText1: "O gráfico mostra {0} e disparidade de {1} modelos.",
    insightsText2: "{0} varia de {1} a {2}. A disparidade varia de {3} a {4}.",
    insightsText3:
      "O modelo mais preciso consegue {0} de {1} e uma disparidade de {2}.",
    insightsText4:
      "O modelo com menor disparidade consegue {0} de {1} e uma disparidade de {2}.",
    disparityInOutcomes: "Disparidade nas predições",
    disparityInAccuracy: "Disparidade em {0}",
    howToMeasureDisparity: "Como se deve medir a disparidade?"
  },
  Report: {
    modelName: "Modelo {0}",
    title: "Disparidade no desempenho",
    globalAccuracyText: "É o {0} global",
    accuracyDisparityText: "É a disparidade em {0}",
    editConfiguration: "Editar configuração",
    backToComparisons: "Vista de vários modelos",
    outcomesTitle: "Disparidade nas predições",
    minTag: "Mín.",
    maxTag: "Máx.",
    groupLabel: "Subgrupo",
    underestimationError: "Subpredição",
    underpredictionExplanation: "(previsto = 0, verdadeiro = 1)",
    overpredictionExplanation: "(previsto = 1, verdadeiro = 0)",
    overestimationError: "Sobrepredição",
    classificationOutcomesHowToRead:
      "O gráfico de barras mostra a taxa de seleção em cada grupo, o que significa a fração de pontos classificados como 1.",
    regressionOutcomesHowToRead:
      "Os gráficos de caixas mostram a distribuição das predições em cada grupo. Os pontos de dados individuais estão sobrepostos em cima.",
    classificationAccuracyHowToRead1:
      "O gráfico de barras mostra a distribuição de erros em cada grupo.",
    classificationAccuracyHowToRead2:
      "Os erros dividem-se em erros de sobrepredição (prever 1 quando a etiqueta verdadeira é 0) e erros de subpredição (prever 0 quando a etiqueta verdadeira é 1).",
    classificationAccuracyHowToRead3:
      "As taxas reportadas são obtidas dividindo o número de erros pelo tamanho do grupo global.",
    probabilityAccuracyHowToRead1:
      "O gráfico de barras mostra o erro absoluto médio em cada grupo, dividido em sobrepredição e subpredição.",
    probabilityAccuracyHowToRead2:
      "Em cada exemplo, medimos a diferença entre a predição e a etiqueta. Se for positivo, chamamos sobrepredição e, se for negativo, chamamos subpredição.",
    probabilityAccuracyHowToRead3:
      "Reportamos a soma dos erros de sobrepredição e a soma dos erros de subpredição divididos pelo tamanho do grupo global.",
    regressionAccuracyHowToRead:
      "Erro é a diferença entre a predição e a etiqueta. Os gráficos de caixas mostram a distribuição de erros em cada grupo. Os pontos de dados individuais estão sobrepostos em cima.",
    distributionOfPredictions: "Distribuição de predições",
    distributionOfErrors: "Distribuição de erros",
    tooltipPrediction: "Predição: {0}",
    tooltipError: "Erro: {0}"
  },
  Feature: {
    header:
      "Em que funcionalidades gostaria de avaliar a equidade do seu modelo?",
    body:
      "A equidade é avaliada em termos de disparidades no comportamento do seu modelo. Dividiremos os seus dados de acordo com os valores de cada funcionalidade selecionada e avaliaremos de que forma a métrica de desempenho do seu modelo e as predições diferem entre estas divisões.",
    learnMore: "Saiba mais",
    summaryCategoricalCount: "Esta funcionalidade tem {0} valores exclusivos",
    summaryNumericCount:
      "Esta funcionalidade numérica varia de {0} a {1}, e está agrupada em {2} discretizações.",
    showCategories: "Mostrar tudo",
    hideCategories: "Fechar",
    categoriesOverflow: "   e {0} categorias adicionais",
    editBinning: "Editar grupos",
    subgroups: "Subgrupos"
  },
  Metrics: {
    accuracyScore: "Precisão",
    precisionScore: "Precisão",
    recallScore: "Revocação",
    zeroOneLoss: "Perda zero-um",
    specificityScore: "Classificação de especificidade",
    missRate: "Taxa de erros",
    falloutRate: "Taxa de dispersão",
    maxError: "Erro máximo",
    meanAbsoluteError: "Erro absoluto médio",
    meanSquaredError: " MSE (erro quadrático médio)",
    meanSquaredLogError: "Erro de registo quadrático médio",
    medianAbsoluteError: "Erro mediano absoluto",
    average: "Predição média",
    selectionRate: "Taxa de seleção",
    overprediction: "Sobrepredição",
    underprediction: "Subpredição",
    r2_score: "Classificação de R ao quadrado",
    rms_error: "RMSE (raiz do erro quadrático médio)",
    auc: "Área sob a curva ROC",
    balancedRootMeanSquaredError: "RMSE equilibrado",
    balancedAccuracy: "Precisão equilibrada",
    f1Score: "F1-Score",
    logLoss: "Log Loss",
    accuracyDescription:
      "A fração de pontos de dados classificados corretamente.",
    precisionDescription:
      "A fração de pontos de dados classificados corretamente entre os classificados como 1.",
    recallDescription:
      "A fração de pontos de dados classificados corretamente entre aqueles cuja etiqueta verdadeira é 1. Nomes alternativos: taxa de verdadeiros positivos, sensibilidade.",
    rmseDescription: "A raiz quadrada da média de erros quadráticos.",
    mseDescription: "A média de erros quadráticos.",
    meanAbsoluteErrorDescription:
      "A média dos valores absolutos dos erros. Mais robusto para valores atípicos do que o MSE.",
    r2Description: "A fração de desvio nas etiquetas explicadas pelo modelo.",
    aucDescription:
      "A qualidade das predições, visualizada como classificações, na separação de exemplos positivos de exemplos negativos.",
    balancedRMSEDescription:
      "Os exemplos positivos e negativos são reponderados para terem uma ponderação total igual. Adequado se existir um grande desequilíbrio nos dados subjacentes.",
    balancedAccuracyDescription:
      "Os exemplos positivos e negativos são reponderados para terem uma ponderação total igual. Adequado se existir um grande desequilíbrio nos dados subjacentes.",
    f1ScoreDescription: "F1-Score is the harmonic mean of precision and recall."
  },
  BinDialog: {
    header: "Configurar discretizações",
    makeCategorical: "Tratar como categórico",
    save: "Guardar",
    cancel: "Cancelar",
    numberOfBins: "Número de discretizações:",
    categoryHeader: "Valores de discretização:"
  }
};