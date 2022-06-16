FROM openjdk:11

#To expose this port outside the container so that application outside the container can access it
EXPOSE 8080

# addding the currentfile to rootfirectory of jar
ADD target/EmpBackend.jar EmpBackend.jar

#command to run the jar
ENTRYPOINT ["java","-jar","/EmpBackend.jar"]