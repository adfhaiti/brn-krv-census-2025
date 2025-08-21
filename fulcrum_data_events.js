// Function to set activity field based on age
function checkAgeAndSetActivity (event) {
  var age = VALUE('451_laj_moun_lan')
  if (age !== null && age !== undefined && age < 7) {
    SETVALUE('430_eske_li_gen_yon_aktivite_ki_antre_kob', 'non aplikab')
  }
}

// Function to set marital status for minors
function setMaritalStatusForMinors (event) {
  var age = VALUE('451_laj_moun_lan')
  if (age !== null && age !== undefined && age < 18) {
    SETVALUE('46_sitiyasyon_matrimonyal_aktyel', 'Non aplikab')
  }
}

// Function to validate year of birth
function validateYearOfBirth () {
  var yearValue = VALUE('45_ki_ane_li_fet')
  if (yearValue !== null && yearValue !== undefined && yearValue > 2025) {
    ALERT('Nimewo a pa kòrèk. Tanpri verifye valè a.')
    return false
  }
  return true
}

// Function to toggle visibility based on response
function toggleVisibility (event) {
  // Get the choice value
  var response = CHOICEVALUE($452_pa_ka_reponn_45_laj_la)

  // If no choice value, try regular value
  if (!response) {
    response = VALUE('452_pa_ka_reponn_45_laj_la')
  }

  // Check if fields should be hidden
  var shouldHide = false
  if (response) {
    var responseStr = String(response).toLowerCase().trim()
    shouldHide =
      responseStr === 'pa konn laj li' ||
      responseStr === 'refize reponn' ||
      responseStr.indexOf('pa konn') >= 0 ||
      responseStr.indexOf('refize') >= 0
  }

  // Apply visibility settings
  SETHIDDEN('45_ki_ane_li_fet', shouldHide)
  SETHIDDEN('451_laj_moun_lan', shouldHide)

  // Clear values when hiding to maintain data consistency
  if (shouldHide) {
    SETVALUE('45_ki_ane_li_fet', null)
    SETVALUE('451_laj_moun_lan', null)
  }
}

// Main function to run all checks when age changes
function onAgeChange (event) {
  setMaritalStatusForMinors(event)
  checkAgeAndSetActivity(event)
  validateYearOfBirth()
}

// Initialize all functions when repeatable
