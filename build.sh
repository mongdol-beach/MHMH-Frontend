cd ../ #상위 디렉토리로 이동
mkdir output # 새로운 'output' 디렉토리 생성
cp -R ./MHMH-Frontend/* ./output # 'frontend' 디렉토리의 내용을 'output'으로 복사
cp -R ./output ./MHMH-Frontend/ # 'output' 디렉토리를 다시 'frontend' 디렉토리 안으로 복사
