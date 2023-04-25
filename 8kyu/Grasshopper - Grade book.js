const getGrade = (s1, s2, s3) => {
    let averageValue = (s1 + s2 + s3)/3
    return  averageValue <= 100 && averageValue >=90 ? 'A':
            averageValue < 90 && averageValue >=80 ? 'B':
            averageValue < 80 && averageValue >=70 ? 'C':
            averageValue < 70 && averageValue >=60 ? 'D':
            averageValue < 60 && averageValue >=0 ? 'F': false
  }
  getGrade(76, 56, 78)//?