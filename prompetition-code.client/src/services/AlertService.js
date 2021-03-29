/* eslint-disable no-undef */
class AlertService {
  showInfo(num) {
    // Sweet Alerts Shows Info for corresponding button
    try {
      let infoText, infoTitle
      switch (num) {
        case 0:
          infoTitle = 'The Daily Prompt'
          infoText = 'This is a re-occuring challenge that you and others can compete in for a win. If you have the best response to todays prompt, you earn a win! Responses are judged by likes given to other users.'
          break
        case 1:
          infoTitle = 'Previous Dailys'
          infoText = 'This is a collection of previous daily prompts you can view to see who won on that day, or to add your own response. This is purely for practice and fun. Wins are not available here.'
          break
        case 2:
          infoTitle = 'Prompt Duel'
          infoText = 'This is a live challenge between you and one other where you are given a short amount of time to respond. Then, after a judging period, a winner will be declared.'
          break
      }
      Swal.fire(
        '' + infoTitle,
        '' + infoText,
        'question'
      )
    } catch (err) {
      logger.error('Couldnt show mode info', err)
    }
  }
}

export const alertService = new AlertService()
