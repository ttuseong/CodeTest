function solution(skill, skill_trees) {
    var answer = 0;
    
    for(var i = 0; i < skill_trees.length; i++){
        var temp = skill;
        
        for(var j = 0; j < skill_trees[i].length; j++){
            var check = temp.indexOf(skill_trees[i][j]);
            
            if(check == 0){
                temp = temp.substr(1);
            } else if(check > 0){
                break;
            }
            
            if(j == skill_trees[i].length-1){
                answer++;
            }
        }
    }
    
    return answer;
}